const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {jobService, requirementsService, employerService} = require('../services');
const {Employer} = require("../models");
const mongoose = require("mongoose");


const createJob = catchAsync(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  // because if some data is incorrect, we dont want requirements to get created
  // as a side effect
  try {
    const {requirements, ...jobData} = req.body;
    const requirementsInstance = await requirementsService.createRequirements(requirements);
    const employer = await Employer.findOne({adminUser: req.user._id});

    const body = {employer: employer._id, requirements: requirementsInstance._id, ...jobData};
    const job = await jobService.createJob(body);
    res.status(httpStatus.CREATED).send(job);

  } catch (error) {
    await session.abortTransaction();
    console.error('Error creating job:', error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: 'Error creating job' + error});
  } finally {
    session.endSession();
  }

});

const getJobs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'location', 'employmentType', 'remote', 'appDeadline', 'employer', 'jobType']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);
  const searchTitle = req.query.searchTitle;
  const searchLocation = req.query.searchLocation;

  if(req.query.status === 'active') {
    filter.appDeadline = {$lt: new Date()}
  } else if(req.query.status === 'expired') {
    filter.appDeadline = {$gt: new Date()}
  }

  if(req.query.startDate) {
    filter.createdAt = {$gte: req.query.startDate}
  }
  if(req.query.endDate) {
    filter.createdAt = {$lt: req.query.endDate}
  }
  if(req.query.startDate && req.query.endDate) {
    filter.createdAt = {$gte: req.query.startDate, $lt: req.query.endDate}
  }

  const result = await jobService.queryJobs(filter, options, searchTitle, searchLocation);
  res.send(result);
});

const getJob = catchAsync(async (req, res) => {
  const job = await jobService.getJobById(req.params.jobId, req.query.populate);
  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  res.send(job);
});

const updateJob = catchAsync(async (req, res) => {
  const job = await jobService.updateJobById(req.params.jobId, req.body);
  res.send(job);
});

const deleteJob = catchAsync(async (req, res) => {
  await jobService.deleteJobById(req.params.jobId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
};

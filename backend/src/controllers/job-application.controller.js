const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { jobApplicationService } = require('../services');

const createJobApplication = catchAsync(async (req, res) => {
  const body = {user: req.user._id, ...req.body};
  const jobApplication = await jobApplicationService.createJobApplication(body);
  res.status(httpStatus.CREATED).send(jobApplication);
});

const getJobApplications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['jobId', 'userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await jobApplicationService.queryJobApplications(filter, options);
  res.send(result);
});

const getJobApplication = catchAsync(async (req, res) => {
  const jobApplication = await jobApplicationService.getJobApplicationById(req.params.jobApplicationId);
  if (!jobApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job application not found');
  }
  res.send(jobApplication);
});

const updateJobApplication = catchAsync(async (req, res) => {
  const jobApplication = await jobApplicationService.updateJobApplicationById(req.params.jobApplicationId, req.body);
  res.send(jobApplication);
});

const deleteJobApplication = catchAsync(async (req, res) => {
  await jobApplicationService.deleteJobApplicationById(req.params.jobApplicationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};

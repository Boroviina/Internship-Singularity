const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { jobApplicationService } = require('../services');

const createJobApplication = catchAsync(async (req, res) => {
  const jobApplication = await jobApplicationService.createJobApplication(req.body);
  res.status(httpStatus.CREATED).send(jobApplication);
});

const getJobApplications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await jobApplicationService.queryJobApplications(filter, options);
  res.send(result);
});

const getJobApplication = catchAsync(async (req, res) => {
  const jobApplication = await jobApplicationService.getJobApplicationById(req.params.id);
  if (!jobApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job application not found');
  }
  res.send(jobApplication);
});

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
};

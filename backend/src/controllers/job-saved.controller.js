const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { jobSavedService } = require('../services');

const createSavedJob = catchAsync(async (req, res) => {
  const body = {user: req.user._id, ...req.body};
  const savedJob = await jobSavedService.createSavedJob(body);
  res.status(httpStatus.CREATED).send(savedJob);
});

const getSavedJobs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['job', 'user']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);
  const result = await jobSavedService.querySavedJobs(filter, options);
  res.send(result);
});

const getSavedJob = catchAsync(async (req, res) => {
  const savedJob = await jobSavedService.getSavedJobById(req.params.savedJobId, req.query.populate);
  if (!savedJob) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saved job not found');
  }
  res.send(savedJob);
});

// const updateSavedJob = catchAsync(async (req, res) => {
//   const savedJob = await jobSavedService.updateSavedJobById(req.params.savedJobId, req.body);
//   res.send(savedJob);
// });

const deleteSavedJob = catchAsync(async (req, res) => {
  await jobSavedService.deleteSavedJobById(req.params.savedJobId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSavedJob,
  getSavedJobs,
  getSavedJob,
  // updateSavedJob,
  deleteSavedJob,
};

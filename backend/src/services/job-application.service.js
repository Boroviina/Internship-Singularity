const httpStatus = require('http-status');
const { JobApplication } = require('../models');
const ApiError = require('../utils/ApiError');

const createJobApplication = async (jobApplicationBody) => {
  return JobApplication.create(jobApplicationBody);
};

const queryJobApplications = async (filter, options) => {
  const paginatedJobApplications = await JobApplication.paginate(filter, options);
  const jobApplications = paginatedJobApplications.results || [];
  await JobApplication.populate(jobApplications, [
    {path: 'user', model: 'User'},
    {path: 'job', model: 'Job'}
  ]);
  return paginatedJobApplications;
};

const getJobApplicationById = async (jobApplicationId) => {
  return JobApplication.findById(jobApplicationId).populate('job').populate('user').exec();
};

const updateJobApplicationById = async (jobApplicationId, updateBody) => {
  const jobApplication = await getJobApplicationById(jobApplicationId);
  if (!jobApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job application not found');
  }
  Object.assign(jobApplication, updateBody);
  await jobApplication.save();
  return jobApplication;
};

const deleteJobApplicationById = async (jobApplicationId) => {
  const jobApplication = await getJobApplicationById(jobApplicationId);
  if (!jobApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job application not found');
  }
  await jobApplication.remove();
  return jobApplication;
};

module.exports = {
  createJobApplication,
  queryJobApplications,
  getJobApplicationById,
  updateJobApplicationById,
  deleteJobApplicationById,
};

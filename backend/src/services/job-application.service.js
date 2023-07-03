const httpStatus = require('http-status');
const { JobApplication } = require('../models');
const ApiError = require('../utils/ApiError');

const createJobApplication = async (jobApplicationBody) => {
  return JobApplication.create(jobApplicationBody);
};

const queryJobApplications = async (filter, options) => {
  const jobApplications = await JobApplication.paginate(filter, options);
  return jobApplications;
};

const getJobApplicationById = async (jobApplicationId) => {
  return JobApplication.findById(jobApplicationId);
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

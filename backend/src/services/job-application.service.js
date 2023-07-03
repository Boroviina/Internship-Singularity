const httpStatus = require('http-status');
const { JobApplication } = require('../models');
const ApiError = require('../utils/ApiError');

const createJobApplication = async (jobApplicationBody) => {
  return JobApplication.create(jobApplicationBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryJobApplications = async (filter, options) => {
  const jobApplications = await JobApplication.paginate(filter, options);
  return jobApplications;
};

const getJobApplicationById = async (id) => {
  return JobApplication.findById(id);
};

// const getJobApplicationByUserId = async (userId) => {
//   return JobApplication.find({ userId });
// };
//
// const getJobApplicationByJobId = async (userId) => {
//   return JobApplication.find({ userId });
// };

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
};

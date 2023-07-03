const httpStatus = require('http-status');
const { JobApplication } = require('../models');
const ApiError = require('../utils/ApiError');

const createJobApplication = async (jobApplicationBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
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

module.exports = {
  createJobApplication,
  queryJobApplications,
  getJobApplicationById,
};

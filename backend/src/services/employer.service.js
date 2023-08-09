/**
 * Create an employer
 * @param {Object} employerBody
 * @returns {Promise<Employer>}
 */
const {Employer} = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");


const createEmployer = async (employerBody) => {
  return Employer.create(employerBody);
};

/**
 * Query for employers
 * @param {Object} filter -Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] -Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] -Maximum number of results per page (default = 10)
 * @param {number} [options.page] -Current page (default = 1)
 * @return {Promise<QueryResult>}
 */
const queryEmployers= async (filter, options) => {
  const employers = await Employer.paginate(filter, options);
  return employers;
};

/**
 * Get employer by ID
 * @param {ObjectId} id
 * @return {Promise<Job>}
 */
const getEmployerById = async (id) => {
  return Employer.findById(id);
};

const deleteEmployerById = async (employerId) => {
  const employer = await getEmployerById(employerId);
  if (!employer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employer not found');
  }
  await employer.remove();
  return employer;
};

module.exports = {
  createEmployer,
  queryEmployers,
  getEmployerById,
  deleteEmployerById
};


const httpStatus = require('http-status');
const {Job} = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * Create a job
 * @param {Object} job
 * @returns {Promise<Job>}
 */

const createJob = async (job) => {
  return Job.create(job);
};


/**
 * Query for jobs
 * @param {Object} filter -Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] -Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] -Maximum number of results per page (default = 10)
 * @param {number} [options.page] -Current page (default = 1)
 * @return {Promise<QueryResult>}
 */
const queryJobs = async (filter, options) => {
  const jobs = await Job.paginate(filter, options);
  return jobs;
};

/**
 * Get job by ID
 * @param {ObjectId} id
 * @return {Promise<Job>}
 */
const getJobById = async (id, populate) => {

  const populateBy=[];
  if(populate){
    populate.split(',').forEach((populateOption)=>{
      populateBy.push(populateOption);
    })
    return Job.findById(id).populate(populateBy).exec();
  }
  return Job.findById(id);
};

/**
 * Update job by id
 * @param {ObjectId} jobId
 * @param {Object} updateJob
 * @return {Promise<Job>}
 */
const updateJobById = async (jobId, updateJob) => {
  const job = await getJobById(jobId);
  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  Object.assign(job, updateJob);
  await job.save();
  return job;
};

/**
 * delete job by id
 * @param {Objectid} jobId
 * @return {Promise<Job>}
 */
const deleteJobById = async (jobId) => {
  const job = await getJobById(jobId);
  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  await job.remove();
  return job;
}

module.exports={
  deleteJobById,
  updateJobById,
  getJobById,
  queryJobs,
  createJob
};

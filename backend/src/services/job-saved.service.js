const httpStatus = require('http-status');
const { JobSaved } = require('../models');
const ApiError = require('../utils/ApiError');

const createSavedJob = async (savedJobBody) => {
  return JobSaved.create(savedJobBody);
};

const querySavedJobs = async (filter, options) => {
  const paginatedSavedJobs = await JobSaved.paginate(filter, options);
  const savedJobs = paginatedSavedJobs.results || [];
  await JobSaved.populate(savedJobs, [
    // {path: 'user', model: 'User'},
    {path: 'job', model: 'Job'}
  ]);
  return paginatedSavedJobs;
};

const getSavedJobById = async (savedJobId) => {
  return JobSaved.findById(savedJobId).populate(['job']).exec();
};

// const updateSavedJobById = async (savedJobId, updateBody) => {
//   const savedJob = await getSavedJobById(savedJobId);
//   if (!savedJob) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Saved job not found');
//   }
//   Object.assign(savedJob, updateBody);
//   await savedJob.save();
//   return savedJob;
// };

const deleteSavedJobById = async (savedJobId) => {
  const savedJob = await getSavedJobById(savedJobId);
  if (!savedJob) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saved job not found');
  }
  await savedJob.remove();
  return savedJob;
};

module.exports = {
  createSavedJob,
  querySavedJobs,
  getSavedJobById,
  // updateSavedJobById,
  deleteSavedJobById,
};

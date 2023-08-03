const httpStatus = require('http-status');
const {JobSaved} = require('../models');
const ApiError = require('../utils/ApiError');

const createSavedJob = async (savedJobBody) => {
  return JobSaved.create(savedJobBody);
};

const querySavedJobs = async (filter, options) => {
  const savedJobs = await JobSaved.paginate(filter, options);
  return savedJobs;
};

const getSavedJobById = async (savedJobId, populate) => {
  const populateBy = [];
  if(populate) {
    populate.split(',').forEach((populateOption) => {
      populateBy.push(populateOption)
    })
    return JobSaved.findById(savedJobId).populate(populateBy).exec();
  }
  return JobSaved.findById(savedJobId);
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

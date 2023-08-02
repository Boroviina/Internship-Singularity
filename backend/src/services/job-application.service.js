const httpStatus = require('http-status');
const {JobApplication} = require('../models');
const ApiError = require('../utils/ApiError');
const emailService = require('./email.service');

const createJobApplication = async (jobApplicationBody, email, name) => {
  await emailService.sendSuccessfulJobApplicationEmail(email, name);
  return JobApplication.create(jobApplicationBody);
};

const queryJobApplications = async (filter, options) => {
  const jobApplications = await JobApplication.paginate(filter, options);
  return jobApplications;
};

const getJobApplicationById = async (jobApplicationId, populate) => {
  const populateBy = [];
  if(populate) {
    populate.split(',').forEach((populateOption) => {
      populateBy.push(populateOption)
    })
    return JobApplication.findById(jobApplicationId).populate(populateBy).exec();
  }
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

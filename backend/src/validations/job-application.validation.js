const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createJobApplication = {
  body: Joi.object().keys({
    job: Joi.required().custom(objectId),
    phoneNumber: Joi.string().required(),
    cv: Joi.string().required(),
    coverLetter: Joi.string().optional(),
    additionalDocument: Joi.string().optional()
  }),
};

const getJobApplications = {
  query: Joi.object().keys({
    user: Joi.string(),
    job: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.string().custom(objectId),
  }),
};

const updateJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      phoneNumber: Joi.string(),
      cv: Joi.string(),
      coverLetter: Joi.string(),
      additionalDocument: Joi.string(),
    })
    .min(1),
};

const deleteJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};

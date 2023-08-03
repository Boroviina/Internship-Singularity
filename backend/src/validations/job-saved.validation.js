const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSavedJob = {
  body: Joi.object().keys({
    job: Joi.required().custom(objectId),
  }),
};

const getSavedJobs = {
  query: Joi.object().keys({
    user: Joi.string(),
    job: Joi.string(),
    sortBy: Joi.string(),
    populate: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSavedJob = {
  params: Joi.object().keys({
    savedJobId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    populate: Joi.string(),
  }),
};

const deleteSavedJob = {
  params: Joi.object().keys({
    savedJobId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSavedJob,
  getSavedJobs,
  getSavedJob,
  deleteSavedJob,
};

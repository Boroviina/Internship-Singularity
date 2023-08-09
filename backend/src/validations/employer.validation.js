const Joi = require("joi");
const {objectId, password} = require("./custom.validation");

const getEmployers= {
  query: Joi.object().keys({
    companyName: Joi.string(),
    industry: Joi.string(),
    adminUser: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
}

const getEmployer = {
  params: Joi.object().keys({
    employerId: Joi.required().custom(objectId)
  }),
};

const deleteEmployer = {
  params: Joi.object().keys({
    employerId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getEmployers,
  getEmployer,
  deleteEmployer,
};

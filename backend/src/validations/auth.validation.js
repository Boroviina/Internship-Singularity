const Joi = require('joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    active: Joi.boolean(),
  }),
};

const registerEmployer = {
  body: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().custom(password),
      name: Joi.string().required(),
    }),
    companyName: Joi.string().required(),
    industry: Joi.string().required(),
    numOfEmployees: Joi.number().optional().integer().min(1).max(1500000),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
    companyEmail: Joi.string().email(),
    phone: Joi.string().optional(),
    fax: Joi.string().optional(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  query: Joi.object().keys({
    role: Joi.string().required(),
  }),
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  registerEmployer,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};

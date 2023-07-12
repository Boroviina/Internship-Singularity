const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const {employerService} = require("../services");


const getEmployers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['industry', 'numOfEmployees']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await employerService.queryEmployers(filter, options);
  res.send(result);
});

const getEmployer = catchAsync(async (req, res) => {
  const employer = await employerService.getEmployerById(req.params.employerId);
  if (!employer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employer not found');
  }
  res.send(employer);
});

module.exports = {
  getEmployers,
  getEmployer
};

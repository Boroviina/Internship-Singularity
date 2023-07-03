const express = require('express');
const validate = require('../../middlewares/validate');
const jobApplicationController = require('../../controllers/job-application.controller');
const jobApplicationValidation = require("../../validations/job-application.validation");

const router = express.Router();

router
  .route('/')
  .post(validate(jobApplicationValidation.createJobApplication), jobApplicationController.createJobApplication)
  .get(validate(jobApplicationValidation.getJobApplications), jobApplicationController.getJobApplications);

router
  .route('/:jobApplicationId')
  .get(validate(jobApplicationValidation.getJobApplication), jobApplicationController.getJobApplication)
  .patch(validate(jobApplicationValidation.updateJobApplication), jobApplicationController.updateJobApplication)
  .delete(validate(jobApplicationValidation.deleteJobApplication), jobApplicationController.deleteJobApplication);

module.exports = router;

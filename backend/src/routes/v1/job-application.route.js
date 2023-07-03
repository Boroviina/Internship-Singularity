const express = require('express');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const jobApplicationController = require('../../controllers/job-application.controller');

const router = express.Router();

router
  .route('/')
  .post(jobApplicationController.createJobApplication)
  .get(jobApplicationController.getJobApplications);

router
  .route('/:id')
  .get(jobApplicationController.getJobApplication);

module.exports = router;

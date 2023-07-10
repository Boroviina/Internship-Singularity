const express = require('express');
const validate = require('../../middlewares/validate');
const jobApplicationController = require('../../controllers/job-application.controller');
const jobApplicationValidation = require("../../validations/job-application.validation");
const auth = require("../../middlewares/auth");
const {uploads, processUpload} = require("../../middlewares/job-application-file-upload")

const router = express.Router();

router
  .route('/')
  .post(
    auth('createJobApplications'),
    uploads,
    processUpload,
    validate(jobApplicationValidation.createJobApplication),
    jobApplicationController.createJobApplication)
  .get(
    auth('getJobApplications'),
    validate(jobApplicationValidation.getJobApplications),
    jobApplicationController.getJobApplications);

router
  .route('/:jobApplicationId')
  .get(
    auth('getJobApplications'),
    validate(jobApplicationValidation.getJobApplication),
    jobApplicationController.getJobApplication)
  .patch(
    auth('manageJobApplications'),
    validate(jobApplicationValidation.updateJobApplication),
    jobApplicationController.updateJobApplication)
  .delete(
    auth('manageJobApplications'),
    validate(jobApplicationValidation.deleteJobApplication),
    jobApplicationController.deleteJobApplication);

module.exports = router;

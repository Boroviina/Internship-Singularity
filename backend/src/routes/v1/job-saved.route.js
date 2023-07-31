const express = require('express');
const validate = require('../../middlewares/validate');
const jobSavedController = require('../../controllers/job-saved.controller');
const jobSavedValidation = require("../../validations/job-saved.validation");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route('/')
  .post(
    auth('manageSavedJobs'),
    validate(jobSavedValidation.createSavedJob),
    jobSavedController.createSavedJob)
  .get(
    auth('getSavedJobs'),
    validate(jobSavedValidation.getSavedJobs),
    jobSavedController.getSavedJobs);

router
  .route('/:savedJobId')
  .get(
    auth('getSavedJobs'),
    validate(jobSavedValidation.getSavedJob),
    jobSavedController.getSavedJob)
  .delete(
    auth('manageSavedJobs'),
    validate(jobSavedValidation.deleteSavedJob),
    jobSavedController.deleteSavedJob);

module.exports = router;

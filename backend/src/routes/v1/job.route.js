const express = require('express');
const jobController = require('../../controllers/job.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const jobValidation = require('../../validations/job.validation');

const router = express.Router();

router
  .route('/')
  .post(auth('manageJobs'), validate(jobValidation.createJob), jobController.createJob)
  .get(auth('getJobs'), validate(jobValidation.getJobs), jobController.getJobs);

router
  .route('/:jobId')
  .get(auth('getJobs'), validate(jobValidation.getJob), jobController.getJob)
  .patch(auth('manageJobs'), validate(jobValidation.updateJob), jobController.updateJob)
  .delete(auth('removeJob'), validate(jobValidation.deleteJob), jobController.deleteJob);

module.exports = router;

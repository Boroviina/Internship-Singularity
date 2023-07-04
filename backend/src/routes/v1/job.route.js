const express = require('express');
const jobController = require('../../controllers/job.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .post(auth('manageJobs'), jobController.createJob)
  .get(auth('getJobs'), jobController.getJobs);

router
  .route('/:jobId')
  .get(auth('getJobs'), jobController.getJob)
  .patch(auth('manageJobs'), jobController.updateJob)
  .delete(auth('removeJob'), jobController.deleteJob);

module.exports = router;

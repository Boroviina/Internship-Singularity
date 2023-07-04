const express = require('express');
const jobController = require('../../controllers/job.controller');

const router = express.Router();

router
  .route('/')
  .post(jobController.createJob)
  .get(jobController.getJobs);

router
  .route('/:jobId')
  .get(jobController.getJob)
  .patch(jobController.updateJob)
  .delete(jobController.deleteJob);

module.exports = router;

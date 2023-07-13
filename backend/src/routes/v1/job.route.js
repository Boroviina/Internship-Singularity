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
  .get(auth('getJob'), jobController.getJob)
  .patch(auth('manageJob'), jobController.updateJob)
  .delete(auth('deleteJob'), jobController.deleteJob);

module.exports = router;

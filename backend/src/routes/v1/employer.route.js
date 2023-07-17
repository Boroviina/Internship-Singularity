const express = require("express");
const employerController = require('../../controllers/employer.controller');

const router = express.Router();

router.route('/')
  .get(employerController.getEmployers);

router.route('/:employerId')
  .get(employerController.getEmployer);

module.exports = router;

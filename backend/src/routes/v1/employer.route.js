const express = require("express");
const employerController = require('../../controllers/employer.controller');
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const employerValidation = require("../../validations/employer.validation");

const router = express.Router();

router.route('/')
  .get(employerController.getEmployers);

router.route('/:employerId')
  .get(employerController.getEmployer)
  .delete(auth('manageEmployers'), validate(employerValidation.deleteEmployer), employerController.deleteEmployer);

module.exports = router;

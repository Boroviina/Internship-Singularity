const express = require('express');
const fileController = require('../../controllers/file.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/:fileId')
  .get(auth('getFile'), fileController.getFile);

module.exports = router;

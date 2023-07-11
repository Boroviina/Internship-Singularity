const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const multer = require("multer");
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require("../utils/catchAsync");
const {File} = require('../models');

const createFile = async (fileBody) => {
  return File.create(fileBody);
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});

const uploadFiles = (fields) => upload.fields(fields);

const processUpload = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  for (const field in req.files) {
    const fileBody = {};

    const fieldName = req.files[field][0].fieldname;
    fileBody.fieldName = fieldName;

    const originalName = req.files[field][0].originalname;
    fileBody.originalName = originalName;

    const encoding = req.files[field][0].encoding;
    fileBody.encoding = encoding;

    const mimetype = req.files[field][0].mimetype;
    fileBody.mimetype = mimetype;

    const size = req.files[field][0].size;
    fileBody.size = size;

    const extension = path.extname(req.files[field][0].originalname);
    const fileName = uuidv4() + extension;
    fileBody.fileName = fileName;

    const file = await createFile(fileBody);
    await fs.writeFile(`/${__dirname}/../../public/uploads/${fileName}`, req.files[field][0].buffer, (err) => {
      if (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while uploading additional documents');
      }
    });

    req.body[field] = file._id;
  }

  next();
});

module.exports = {
  processUpload,
  uploadFiles,
};

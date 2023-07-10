const fs = require("fs");
const multer = require("multer");
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if(file.mimetype.startsWith('application')) {
      cb(null, true);
    } else {
      cb(new ApiError(httpStatus.UNSUPPORTED_MEDIA_TYPE, 'Not a PDF file! Please, upload only PDF files.'), false);
    }
  }
});

const uploads = upload.fields([
  {name: 'cv', maxCount: 1},
  {name: 'coverLetter', maxCount: 1},
  {name: 'additionalDocument', maxCount: 1}
]);

const processUpload = catchAsync(async (req, res, next) => {
  if (!req.files.cv) return next();

  const cvFilename = `cv-${req.body.job}-${req.user._id}-${Date.now()}.pdf`;
  const coverLetterFilename = `coverLetter-${req.body.job}-${req.user._id}-${Date.now()}.pdf`;
  const additionalDocumentFilename = `additional-${req.body.job}-${req.user._id}-${Date.now()}.pdf`;

  if(req.files.additionalDocument) {
    await fs.writeFile(`/${__dirname}/../../public/additional-documents/${additionalDocumentFilename}`, req.files.additionalDocument[0].buffer, (err) => {
      if (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while uploading additional documents');
      }
    });
    req.body.additionalDocument = additionalDocumentFilename;
  }

  if(req.files.coverLetter) {
    await fs.writeFile(`/${__dirname}/../../public/cover-letters/${coverLetterFilename}`, req.files.coverLetter[0].buffer, (err) => {
      if (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while uploading cover letter');
      }
    });
    req.body.coverLetter = coverLetterFilename;
  }

  await fs.writeFile(`/${__dirname}/../../public/cv/${cvFilename}`, req.files.cv[0].buffer, (err) => {
    if (err) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while uploading CV');
    }
  });
  req.body.cv = cvFilename;

  next();
});

module.exports = {
  uploads,
  processUpload,
};

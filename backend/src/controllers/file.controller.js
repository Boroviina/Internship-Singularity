const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {fileService} = require('../services');



const getFile = catchAsync(async (req, res) => {
  const file = await fileService.getFileByID(req.params.fileId, req.query.populate);
  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, 'File not found');
  }
  res.send(file);
});

module.exports={
  getFile
}

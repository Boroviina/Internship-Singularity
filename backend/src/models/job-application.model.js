const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const validator = require("validator");

const jobApplicationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    jobId: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    cv: {
      type: String,
      required: true,
      trim: true,
    },
    coverLetter: {
      type: String,
      trim: true,
    },
    additionalDocument: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

jobApplicationSchema.plugin(toJSON);
jobApplicationSchema.plugin(paginate);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;

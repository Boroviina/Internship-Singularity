const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const validator = require("validator");
const stream = require("stream");
const {applicationPhases} = require("../config/application-phases");

const jobApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    job: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Job',
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error('Invalid phone number');
        }
      },
    },
    cv: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Files',
    },
    coverLetter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Files',
    },
    additionalDocument: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Files',
    },
    applicationPhase: {
      type: String,
      enum: applicationPhases,
    }
  },
  {
    timestamps: true,
  }
);

jobApplicationSchema.plugin(toJSON);
jobApplicationSchema.plugin(paginate);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;

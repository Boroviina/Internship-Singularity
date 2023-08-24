const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const validator = require("validator");

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
  },
  {
    timestamps: true,
  }
);

jobApplicationSchema.plugin(toJSON);
jobApplicationSchema.plugin(paginate);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;

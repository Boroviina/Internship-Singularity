const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const validator = require("validator");

const jobApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      // type: Schema.Types.ObjectId,
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

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const {toJSON, paginate} = require('./plugins');


const jobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true,'The field must be filled'],
      trim: true,
      maxLength: [100, 'The field must have less than or equal to 100 characters']
    },
    employer: {
      required: [true, 'The field must be filled'],
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Employer',
    },
    requirements: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Requirements',
    },
    location: {
      type: String,
      trim: true,
      maxLength: [100, 'The field must be less than a 100 characters long']
    },
    salary: {
      type: String,
      trim: true,
      maxLength: [20, 'The field must be less than 20 characters long']
    },
    employmentType: {
      type: String,
      trim: true,
      maxLength: [30, 'The field must be less than 30 characters long']
    },
    description: {
      type: String,
      required: [true,'The field must be filled'],
      trim: true,
      maxLength: [10000, 'The field must be less than 10,000 characters long']
    },
    appDeadline: {
      type: Date,
    },
    remote: {
      type: String,
      trim: true,
      maxLength: [30, 'The field must be less than 10,000 characters long']
    },
    appInstructions: {
      type: String,
      required: [true,'The field must be filled'],
      maxLength: [500, 'The field must have less than or equal to 500 characters'],
      trim: true
    },
    positionsNum:{
      type:Number,
      min: [1, 'Minimal number of position is 1'],
      max:[50, 'Maximal positions number is 10']
    },
    cv: {
      type: Boolean
    },
    coverLetter: {
      type: Boolean
    },
  },
  {
    timestamps: true
  }
);


jobSchema.plugin(toJSON);
jobSchema.plugin(paginate);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;


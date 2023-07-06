const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const {toJSON, paginate} = require('./plugins');


const jobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: [true,'The field must be filled'],
      maxLength: [70, 'The field must have less than or equal to 70 characters']
    },
    description: {
      type: String,
      required: [true,'The field must be filled'],
      trim: true,
      maxLength: [200, 'The field must have less than or equal to 200 characters']
    },
    education: {
      type: String,
      trim: true,
      maxLength: [70, 'The field must have less than or equal to 70 characters']
    },
    skills: {
      type: String,
      trim: true,
      maxLength: [70, 'The field must have less than or equal to 70 characters']
    },
    language: {
      type: String,
      trim: true,
      maxLength: [70, 'The field must have less than or equal to 70 characters']
    },
    driverLicence: {
      type: Boolean
    },
    appDeadline: {
      type: Date,
      required: true
    },
    appInstructions: {
      type: String,
      required: [true,'The field must be filled'],
      maxLength: [200, 'The field must have less than or equal to 200 characters'],
      trim: true
    },
    positionsNum:{
      type:Number,
      min: [1, 'Minimal number of position is 1']
    },
    cv: {
      type: Boolean
    },
    coverLetter: {
      type: Boolean
    }
  },
  {
    timestamp: true
  }
);


jobSchema.plugin(toJSON);
jobSchema.plugin(paginate);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;

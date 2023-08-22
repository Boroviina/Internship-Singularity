const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const {toJSON, paginate} = require('./plugins');
const {jobTypes} = require('./../config/job-types')


const jobSchema = mongoose.Schema(
    {
        jobTitle: {
            type: String,
            required: [true, 'The field must be filled'],
            trim: true,
            maxLength: [100, 'The field must have less than or equal to 100 characters']
        },
        jobType: {
          type: String,
          enum: jobTypes,
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
            maxLength: [100, 'The field must be less than 100 characters long'],
            required: true
        },
        employmentType: {
            type: String,
            trim: true,
            maxLength: [30, 'The field must be less than 30 characters long']
        },
        description: {
            type: String,
            required: [true, 'The field must be filled'],
            trim: true,
            maxLength: [10000, 'The field must be less than 10,000 characters long']
        },
        appDeadline: {
            type: Date,
            required: true
        },
        remote: {
            type: String,
            trim: true,
            maxLength: [30, 'The field must be less than 10,000 characters long']
        },
        appInstructions: {
            type: String,
            required: [true, 'The field must be filled'],
            maxLength: [500, 'The field must have less than or equal to 500 characters'],
            trim: true
        },
        positionsNum: {
            type: Number,
            min: [1, 'Minimal number of position is 1'],
            max: [10, 'Maximal positions number is 10'],
            required: [true, "The fild must be filled"],
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


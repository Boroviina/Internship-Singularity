const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const jobSavedSchema = mongoose.Schema(
  {
    job: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Job',
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

jobSavedSchema.plugin(toJSON);
jobSavedSchema.plugin(paginate);

const JobSaved = mongoose.model('JobSaved', jobSavedSchema);

module.exports = JobSaved;

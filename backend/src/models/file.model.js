const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const fileSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
      trim: true,
    },
    fieldname: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: Number,
    },
    mimetype: {
      type: String,
      // trim: true,
    },
    encoding: {
      type: String,
      // trim: true,
    },
  },
  {
    timestamps: true,
  }
);

fileSchema.plugin(toJSON);
fileSchema.plugin(paginate);

const File = mongoose.model('File', fileSchema);

module.exports = File;

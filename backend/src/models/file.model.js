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
    },
    fieldname: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    mimetype: {
      type: String,
    },
    encoding: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

fileSchema.plugin(toJSON);
fileSchema.plugin(paginate);

const Files = mongoose.model('Files', fileSchema);

module.exports = Files;

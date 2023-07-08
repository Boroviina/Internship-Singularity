const mongoose = require("mongoose");
const {toJSON, paginate} = require("./plugins");
const validator = require("validator");

const employerSchema = mongoose.Schema(
  {
    adminUser: {
      required: true,
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    companyName: {
      type: String,
      required: [true, 'The field must be filled'],
      trim: true,
      maxLength: [50, 'The field must have maximum 50 characters']
    },
    industry: {
      type: String,
      required: [true, 'The field must be filled'],
      trim: true,
      maxLength: [50, 'The field must have maximum 50 characters']
    },
    users: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
      }
    ],
    numOfEmployees: {
      type: Number,
      min: 1,
      max: 1500000,
    },
    city: {
      type: String,
      trim: true,
      maxLength: [50, 'The field must have maximum 50 characters']
    },
    address: {
      type: String,
      trim: true,
      maxLength: [50, 'The field must have maximum 50 characters']
    },
    companyEmail: {
      type: String,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    phone: {
      type: String,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error('Invalid phone number');
        }
      },
    },
    fax: {
      type: String,
      trim: true,
      maxLength: [20, 'The field must have maximum 20 characters']
    }
  }
);

employerSchema.plugin(toJSON);
employerSchema.plugin(paginate);

const Employer = mongoose.model('Employer', employerSchema);
module.exports = Employer;

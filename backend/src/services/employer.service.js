import Employer from "../models/employer.model";


const createEmployer = async (employerBody) => {
  return Employer.create(employerBody);
};

module.exports = {
  createEmployer,
};


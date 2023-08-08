const {Job} = require("../models");
const Requirements = require("../models/requirements.model");
/**
 * Create requirements
 * @param {Object} requirements
 * @returns {Promise<Requirements>}
 */

const createRequirements = async (requirements) => {
  return Requirements.create(requirements);
};

module.exports={
  createRequirements
};

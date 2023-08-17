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

const getRequirements = async (filter, options) => {
  const requirements = await Requirements.paginate(filter, options);
  return requirements;
}

const getReqById = async (id, populate) => {

  const populateBy=[];
  if(populate){
    populate.split(',').forEach((populateOption)=>{
      populateBy.push(populateOption);
    })
    return Requirements.findById(id).populate(populateBy).exec();
  }
  return Requirements.findById(id);
};
const updateRequirementById =async (reqId, updateReq)=>{
  const requirement=await  getReqById(reqId);
  if(!requirement){
    throw  new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  Object.assign(requirement, updateReq);
  await  requirement.save();
  return requirement;
}
const deleteRequirementById=async (reqId)=>{
  const requirement=await  getReqById(reqId);
  if(!requirement){
    throw new ApiError(httpStatus.NOT_FOUND, "Requirement not found");
  }
  await  requirement.remove();
  return requirement;
}

  module.exports = {
    createRequirements,
    getRequirements,
    getReqById,
    updateRequirementById,
    deleteRequirementById
  };

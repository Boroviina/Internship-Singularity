const Joi=require('joi');
const {objectId}=require('./custom.validation');

const  createJob={
  body: Joi.object().keys({
    title:Joi.string().required().max(100),
    jobType:Joi.string().required(),
    description:Joi.string().required().max(1000),
    requirements: Joi.object().keys({
      specialization: Joi.string(),
      experience: Joi.string(),
      education: Joi.string(),
      skills: Joi.string(),
      language: Joi.string(),
      drivingLicense: Joi.bolean().optional()
    }),
    location: Joi.string(),
    salary: Joi.string(),
    employmentType: Joi.string(),
    appDeadline:Joi.date(),
    appInstructions:Joi.string(),
    numPosition:Joi.number(),
    remote: Joi.string(),
    cv:Joi.boolean(),
    coverLetter:Joi.boolean(),
  })
}

const getJobs={
  query:Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
}

const getJob={
  params: Joi.object().keys({
    jobId:Joi.required().custom(objectId)
  }),
};

const updateJob = {
  params: Joi.object().keys({
    jobId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title:Joi.string(),
      jobType:Joi.string().required(),
      requirements: Joi.object().keys({
        specialization: Joi.string(),
        experience: Joi.string(),
        education: Joi.string(),
        skills: Joi.string(),
        language: Joi.string(),
        drivingLicense: Joi.bolean().optional()
      }),
      location: Joi.string(),
      salary: Joi.string(),
      employmentType: Joi.string(),
      description:Joi.string(),
      appDeadline:Joi.date(),
      appInstructions:Joi.string(),
      numPosition:Joi.number(),
      remote: Joi.string(),
      cv:Joi.boolean(),
      coverLetter:Joi.boolean(),
    })
    .min(1),
};

const deleteJob = {
  params: Joi.object().keys({
    jobId: Joi.string().custom(objectId),
  }),
};
 module.exports={
   createJob,
   getJob,
   getJobs,
   updateJob,
   deleteJob,
 }

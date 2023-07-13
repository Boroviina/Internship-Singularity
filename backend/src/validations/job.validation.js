const Joi=require('joi');
const {objectId}=require('./custom.validation');

const  createJob={
  body: Joi.object().keys({
    jobTitle:Joi.string().required().max(100),
    description:Joi.string().required().max(500),
    education:Joi.string().optional().max(200),
    skills:Joi.string().optional().max(200),
    languages:Joi.string().optional().max(100),
    appDeadline:Joi.date().required().min(new Date(Date.now())),
    appInstructions:Joi.string().required().max(500),
    numPosition:Joi.number().required().max(10).min(1).integer().positive(),
    cv:Joi.boolean().optional(),
    coverLetter:Joi.boolean().optional(),
    driverLicense:Joi.boolean().optional(),
  })
}

const getJobs={
  query:Joi.object().keys({
    jobTitle: Joi.string(),
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
      jobTitle:Joi.string(),
      description:Joi.string(),
      education:Joi.string(),
      skills:Joi.string(),
      languages:Joi.string(),
      appDeadline:Joi.date(),
      appInstructions:Joi.string(),
      numPosition:Joi.number(),
      cv:Joi.boolean(),
      coverLetter:Joi.boolean(),
      driverLicense:Joi.boolean(),
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

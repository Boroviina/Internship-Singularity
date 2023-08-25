import ApiClient from './api-client/api-client';
import {JobApplication, JobApplicationRes} from "../models/job-application.model";

const JOB_APP_ENDPOINT = '/job-applications';


const getApplicationsPerJob = (page, jobId: string, limit = 4): Promise<JobApplicationRes | null> => {
    return ApiClient.get(JOB_APP_ENDPOINT, `job=${jobId}&populate=user,files,job&limit=${limit}&page=${page}`)
        .then(response => new JobApplicationRes(response.data))
}
const updateApplication = (appId: string, updatedApp: object)=>{
    return ApiClient.patch(`${JOB_APP_ENDPOINT}/${appId}`, updatedApp).then(response=>response.data);
}

const getJobApplicationsPerJob = (jobId: string): Promise<number | any> => {
    return ApiClient.get(JOB_APP_ENDPOINT, `job=${jobId}&limit=1`)
        .then(response => response.data.totalResults)
}

export {getApplicationsPerJob, getJobApplicationsPerJob, updateApplication}

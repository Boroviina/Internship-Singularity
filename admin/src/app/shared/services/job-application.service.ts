import ApiClient from './api-client/api-client';
import {JobApplication, JobApplicationResponse} from "../models/job-application.model";

const JOB_APP_ENDPOINT = '/job-applications';

// const createJobApplication = (jobApplication: JobApplication) => {
//     return ApiClient.post(USERS_ENDPOINT, {jobApplication})
// }

const getApplicationsPerJob = (page, jobId: string, limit = 8): Promise<JobApplicationResponse | null> => {
    return ApiClient.get(JOB_APP_ENDPOINT, `job=${jobId}&populate=user,files&limit=${limit}&page=${page}`)
        .then(response => new JobApplicationResponse(response.data))
}

const getJobApplicationsPerJob = (jobId: string): Promise<number | any> => {
    return ApiClient.get(JOB_APP_ENDPOINT, `job=${jobId}&limit=1`)
        .then(response => response.data.totalResults)
}

export {getApplicationsPerJob, getJobApplicationsPerJob}

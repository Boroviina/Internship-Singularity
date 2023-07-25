import ApiClient from './api-client/api-client';
import { JobApplication } from "../models/job-application.model";

const JOB_APPLICATION_ENDPOINT = '/job-applications';

const createJobApplication = (jobApplication: FormData): Promise<JobApplication | null> => {
    return ApiClient.postWithFiles(JOB_APPLICATION_ENDPOINT, jobApplication)
        .then(response => response.data)
        .then(data => new JobApplication(data))
}

const getUsersJobApplications = (userId: string): Promise<JobApplication[] | null> => {
    return ApiClient.get(JOB_APPLICATION_ENDPOINT, `user=${userId}`)
        .then(response => response.data)
        .then(data => data.results.map(jobApplication => new JobApplication(jobApplication)))
}

export {createJobApplication, getUsersJobApplications}
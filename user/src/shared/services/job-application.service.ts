import ApiClient from './api-client/api-client';
import { JobApplication } from "../models/job-application.model";

const JOB_APPLICATION_ENDPOINT = '/job-applications';

const createJobApplication = (jobApplication: FormData): Promise<JobApplication | null> => {
    return ApiClient.postWithFiles(JOB_APPLICATION_ENDPOINT, jobApplication)
        .then(response => response.data)
        .then(data => new JobApplication(data))
}

export {createJobApplication}
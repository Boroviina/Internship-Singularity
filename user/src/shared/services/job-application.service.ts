import ApiClient from './api-client/api-client';
import { JobApplication } from "../models/job-application.model";

const JOB_APPLICATION_ENDPOINT = '/job-applications';

const createJobApplication = (jobApplication: object): Promise<JobApplication | null> => {
    return ApiClient.post(JOB_APPLICATION_ENDPOINT, jobApplication)
        .then(response => response.data)
}

export {createJobApplication}
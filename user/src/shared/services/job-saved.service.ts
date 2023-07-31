import ApiClient from './api-client/api-client';
import { JobListing } from "../models/job-listing.model";

const SAVED_JOB_ENDPOINT = '/saved-jobs';

const createSavedJob = (savedJob): Promise<JobListing | null> => {
    return ApiClient.post(SAVED_JOB_ENDPOINT, savedJob)
        .then(response => response.data)
        .then(data => new JobListing(data))
}

const getUsersSavedJobs = (userId: string): Promise<JobListing[] | null> => {
    return ApiClient.get(SAVED_JOB_ENDPOINT, `user=${userId}`)
        .then(response => response.data)
        .then(data => data.results.map(savedJob => new JobListing(savedJob.job)))
}

export {createSavedJob, getUsersSavedJobs}
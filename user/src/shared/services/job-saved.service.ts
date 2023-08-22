import ApiClient from './api-client/api-client';
import {SavedJob} from "../models/job-saved.model";

const SAVED_JOB_ENDPOINT = '/saved-jobs';

const createSavedJob = (savedJob): Promise<SavedJob | null> => {
    return ApiClient.post(SAVED_JOB_ENDPOINT, savedJob)
        .then(response => response.data)
        .then(data => new SavedJob(data))
}

const getSavedJob = (savedJobId: string): Promise<SavedJob | null> => {
    return ApiClient.get(`${SAVED_JOB_ENDPOINT}/${savedJobId}`)
        .then(response => response.data)
        .then(data => new SavedJob(data))
}

const getUsersSavedJobs = (userId: string): Promise<SavedJob[] | null> => {
    return ApiClient.get(SAVED_JOB_ENDPOINT, `user=${userId}&populate=job.requirements,job.employer`)
        .then(response => response.data)
        .then(data => data.results.map(savedJob => new SavedJob(savedJob)))
}

const getUsersSavedJobsByJobId = (userId: string, jobId: string): Promise<SavedJob[] | null> => {
    return ApiClient.get(SAVED_JOB_ENDPOINT, `user=${userId}&job=${jobId}`)
        .then(response => response.data)
        .then(data => data.results.map(savedJob => new SavedJob(savedJob)))
}

const deleteSavedJob = (savedJobId: string): Promise<any> => {
    return ApiClient.remove(`${SAVED_JOB_ENDPOINT}/${savedJobId}`)
        .then(response => response.data)
}

export {createSavedJob, getSavedJob, getUsersSavedJobs, getUsersSavedJobsByJobId, deleteSavedJob}
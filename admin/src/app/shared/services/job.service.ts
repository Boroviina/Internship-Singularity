import ApiClient from "./api-client/api-client";
import {Jobs, JobResponse} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = (): Promise<Jobs[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT, '&populate=requirements,employer')
        .then(response => response.data)
        .then(data => data.results.map(job => new Jobs(job)))
}

const getJobsByEmployerId = (employerId: string): Promise<Jobs[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT, `employer=${employerId}`)
        .then(response => response.data)
        .then(data => data.results.map(job => new Jobs(job)))
}

const getJobsWithoutLimit = (): Promise<JobResponse | null> => {
    return ApiClient.get(JOBS_ENDPOINT, `limit=0&populate=requirements,employer`)
        .then(response => new JobResponse(response.data))
}

const getFilteredJobsWithPages = (page: number, filter, limit = 5): Promise<JobResponse | null> => {
    let query = '';
    for (const key in filter) {
        if (filter[key] !== '') {
            query += `&${key}=${filter[key]}`
        }
    }
    return ApiClient.get(JOBS_ENDPOINT, `limit=${limit}&page=${page}${query}`)
        .then(response => new JobResponse(response.data))
}

const getJobsPaginated = (page, limit = 5): Promise<JobResponse | null> => {
    return ApiClient.get(JOBS_ENDPOINT, `&populate=requirements,employer&limit=${limit}$page=${page}`)
        .then(response => new JobResponse(response.data));
}

const getJob = (jobId: string): Promise<Jobs | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`, `job=${jobId}&populate=requirements`).then(response => response.data)
}
const createJob = (job: object): Promise<Jobs | null> => {
    return ApiClient.post(JOBS_ENDPOINT, job)
        .then(response => response.data)
}
const changeJob = (jobId: string, updatedJob: object): Promise<Jobs | null> => {
    return ApiClient.patch(`${JOBS_ENDPOINT}/${jobId}`, updatedJob).then(response => response.data);
}

const removeJob = (jobId): Promise<Jobs | null> => {
    return ApiClient.remove(`${JOBS_ENDPOINT}/${jobId}`).then(response => response.data);
}
export {
    getJobs,
    getJob,
    getJobsByEmployerId,
    getJobsWithoutLimit,
    getFilteredJobsWithPages,
    createJob,
    changeJob,
    removeJob,
    getJobsPaginated
}


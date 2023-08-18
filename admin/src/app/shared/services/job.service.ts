import ApiClient from "./api-client/api-client";
import {JobListing, JobResponse} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = (): Promise<JobListing[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT, '&populate=requirements,employer')
        .then(response => response.data)
        .then(data => data.results.map(job => new JobListing(job)))
}

const getJobsByEmployerId = (employerId: string): Promise<JobListing[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT, `employer=${employerId}`)
        .then(response => response.data)
        .then(data => data.results.map(job => new JobListing(job)))
}

const getJobsWithoutLimit = (): Promise<JobResponse | null> => {
    return ApiClient.get(JOBS_ENDPOINT, `limit=0&populate=requirements,employer`)
        .then(response => new JobResponse(response.data))
}

const getJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`, `job=${jobId}&populate=requirements`).then(response => response.data)
}
const createJob = (job: object): Promise<JobListing | null> => {
    return ApiClient.post(JOBS_ENDPOINT, job)
        .then(response => response.data)
}
const changeJob = (jobId: string,  updatedJob: object): Promise<JobListing | null> => {
    return ApiClient.patch(`${JOBS_ENDPOINT}/${jobId}`, updatedJob).then(response => response.data);
}

const removeJob = (jobId): Promise<JobListing | null>  => {
    return ApiClient.remove(`${JOBS_ENDPOINT}/${jobId}`).then(response => response.data);
}
export {getJobs,getJob, getJobsByEmployerId, getJobsWithoutLimit, createJob, changeJob, removeJob}


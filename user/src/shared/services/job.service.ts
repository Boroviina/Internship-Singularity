import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = (): Promise<JobListing[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT)
        .then(response => response.data)
        .then(data => data.results.map(job => new JobListing(job)))
}

const getJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`)
        .then(response => response.data)
        .then(data => new JobListing(data))
}

const createJob = (job: object): Promise<JobListing | null> => {
    return ApiClient.post(JOBS_ENDPOINT, job)
        .then(response => response.data)
}
const changeJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.put(JOBS_ENDPOINT, jobId).then(response => response.data);
}

const removeJob = (jobId): Promise<JobListing | null>  => {
    return ApiClient.remove(JOBS_ENDPOINT, jobId).then(response => response.data);
}
export {getJob, getJobs, createJob, changeJob, removeJob}


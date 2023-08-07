 import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = (): Promise<JobListing[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT, '&populate=employer,requirements')
        .then(response => response.data)
        .then(data => {
            console.log(data);
            return data.results.map(job => new JobListing(job));
        });
}

const getJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`)
        .then(response => response.data)
        .then(data => new JobListing(data));
}

const removeJob = (jobId): Promise<JobListing | null>  => {
    return ApiClient.remove(JOBS_ENDPOINT, jobId).then(response => response.data);
}
export {getJob, getJobs, removeJob}


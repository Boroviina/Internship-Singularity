import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = (): Promise<JobListing[] | null> => {
    return ApiClient.get(JOBS_ENDPOINT)
        .then(response => response.data)
        .then(data => data.results.map(job => new JobListing(job)))
}

const createJob = (job) => {
    return ApiClient.post(JOBS_ENDPOINT, job).then(response => response.data).then(response => response.map(job => new JobListing(job)));;
}
export {getJobs, createJob}

const changeJob = (jobId) => {
    return ApiClient.put(JOBS_ENDPOINT, jobId).then(response => response.data);
}

const removeJob=(jobId)=>{
    return ApiClient.remove(JOBS_ENDPOINT, jobId).then(response=>response.data);
}
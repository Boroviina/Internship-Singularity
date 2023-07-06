import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

const getJobs = () => {
    return ApiClient.get(JOBS_ENDPOINT).then(response => response.data);
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
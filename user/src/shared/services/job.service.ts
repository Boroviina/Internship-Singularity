 import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

 const getJobs = (search?: string, filter?: string): Promise<JobListing[] | null> => {
     let query: string = '&populate=employer,requirements';
     if(search) {
         query += search;
     }
     if(filter) {
         query += filter;
     }
     return ApiClient.get(JOBS_ENDPOINT, query)
         .then(response => response.data)
         .then(data => {
             return data.results.map(job => new JobListing(job));
         })
         .catch((err) => {
             console.log(err);
         });
 };

const getJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`)
        .then(response => response.data)
        .then(data => new JobListing(data));
};

const removeJob = (jobId): Promise<JobListing | null>  => {
    return ApiClient.remove(JOBS_ENDPOINT, jobId).then(response => response.data);
};
export {getJob, getJobs, removeJob}


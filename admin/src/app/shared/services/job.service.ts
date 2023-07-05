import ApiClient from "./api-client/api-client";

const JOBS_ENDPOINT = '/jobs';

const getJobs = () => {
    return ApiClient.get(JOBS_ENDPOINT).then(response => response.data);
}

const createJob =  (job) => {
    return ApiClient.post(JOBS_ENDPOINT, job).then(response => response.data);
}
export {getJobs, createJob}
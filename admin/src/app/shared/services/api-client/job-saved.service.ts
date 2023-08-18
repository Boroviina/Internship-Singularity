import ApiClient from "./api-client";

const SAVED_JOB_ENDPOINT = '/saved-jobs';

const getSavedJobsPerJob = (jobId: string): Promise<number | any> => {
    return ApiClient.get(SAVED_JOB_ENDPOINT, `job=${jobId}`)
        .then(response => response.data.totalResults)
}

export {getSavedJobsPerJob}
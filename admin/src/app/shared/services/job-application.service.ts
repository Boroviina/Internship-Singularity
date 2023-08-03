import ApiClient from './api-client/api-client';
import {JobApplication} from "../models/job-application.model";

const JOB_APP_ENDPOINT = '/job-applications';

// const createJobApplication = (jobApplication: JobApplication) => {
//     return ApiClient.post(USERS_ENDPOINT, {jobApplication})
// }

const getApplications = (jobId: string): Promise<JobApplication[] | null> => {
    return ApiClient.get(JOB_APP_ENDPOINT, `job=${jobId}&populate=user,files`).then(response => {
        return response.data;
    }).then(data => data.results.map(jobApplication => new JobApplication(jobApplication)))
}

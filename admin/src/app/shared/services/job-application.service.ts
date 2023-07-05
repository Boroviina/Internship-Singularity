import ApiClient from './api-client/api-client';

const USERS_ENDPOINT = '/job-applications';

const createJobApplication = (job: string, phoneNumber: string, cv: string, coverLetter: string, additionalDocument: string) => {
    return ApiClient.post(USERS_ENDPOINT, {job, phoneNumber, cv, coverLetter, additionalDocument})
}

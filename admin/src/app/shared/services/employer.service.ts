import ApiClient from "./api-client/api-client";
import {Employer} from "../models/employer.model";

const REGISTER_EMPLOYER_ENDPOINT = '/auth/register-employer';

const registerEmployer = (employer: object): Promise<Employer | null> => {
    console.log("\n\nREGISTERED EMPLOYER:" + employer + "\n\n");
    return ApiClient.post(REGISTER_EMPLOYER_ENDPOINT, employer)
        .then(response => response.data);
}

export {registerEmployer};
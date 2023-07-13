import ApiClient from "./api-client/api-client";
import {Employer} from "../models/employer.model";

const REGISTER_EMPLOYER_ENDPOINT = '/auth/register-employer';

const registerEmployer = (employer: object): Promise<Employer | null> => {
    console.log(employer);
    return ApiClient.post(REGISTER_EMPLOYER_ENDPOINT, employer)
        .then(response => new Employer(response.data));
}

export {registerEmployer};
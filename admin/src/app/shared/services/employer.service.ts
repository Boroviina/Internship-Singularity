import ApiClient from "./api-client/api-client";
import {Employer} from "../models/employer.model";

const REGISTER_EMPLOYER_ENDPOINT = '/register-employer';

const registerEmployer = (employer: object): Promise<Employer | null> => {
    return ApiClient.post(REGISTER_EMPLOYER_ENDPOINT, employer)
        .then(response => response.data);
}
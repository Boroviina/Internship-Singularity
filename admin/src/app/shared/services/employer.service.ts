import ApiClient from "./api-client/api-client";
import {Employer} from "../models/employer.model";

const REGISTER_EMPLOYER_ENDPOINT = '/employers';

const registerEmployer = (employer: object): Promise<Employer | null> => {
    console.log(employer);
    return ApiClient.post('/register-employer', employer)
        .then(response => new Employer(response.data));
}

const deleteEmployer = (employerId: string): Promise<any> => {
    return ApiClient.remove(`${REGISTER_EMPLOYER_ENDPOINT}/${employerId}`)
        .then(response => response.data)
}

const getEmployers = (userId: string): Promise<Employer | null> => {
    return ApiClient.get(REGISTER_EMPLOYER_ENDPOINT, `adminUser=${userId}`)
        .then(response => response.data)
        .then(data => data.results.map(employer => new Employer(employer)))
}

export {registerEmployer, deleteEmployer, getEmployers};
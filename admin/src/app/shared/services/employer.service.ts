import ApiClient from "./api-client/api-client";
import {Employer} from "../models/employer.model";

const EMPLOYER_ENDPOINT = '/employers';

const registerEmployer = (employer: object): Promise<Employer | null> => {
    console.log(employer);
    return ApiClient.post('/auth/register-employer', employer)
        .then(response => new Employer(response.data));
}

const deleteEmployer = (employerId: string): Promise<any> => {
    return ApiClient.remove(`${EMPLOYER_ENDPOINT}/${employerId}`)
        .then(response => response.data)
}

const getEmployers = (userId: string): Promise<Employer[] | null> => {
    return ApiClient.get(EMPLOYER_ENDPOINT, `adminUser=${userId}`)
        .then(response => response.data)
        .then(data => data.results.map(employer => new Employer(employer)))
}

const updateEmployer = (employerId: string, employer): Promise<Employer | null> => {
    return ApiClient.patch(`${EMPLOYER_ENDPOINT}/${employerId}`, employer)
        .then(response => response.data)
        .then(data => new Employer(data))
}

export {registerEmployer, deleteEmployer, getEmployers, updateEmployer};
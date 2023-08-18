import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";
import {Employer} from "./employer.model";
import {JobTypes} from "../enums/job-types.enum";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    jobType: JobTypes;
    employer: Employer;
    requirements: RequirementsModel;
    location: string;
    salary: number;
    employmentType: string;
    description: string;
    appDeadline: string;
    remote: string;
    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.employer = new Employer(attributes.employer);
        this.requirements = new RequirementsModel(attributes.requirements);
    }
}

export class JobResponse extends BaseModel {
    results: JobListing[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.results = attributes.results.map(job => new JobListing(job));
    }
}
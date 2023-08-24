import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";
import {Employer} from "./employer.model";
import {JobTypes} from "../enums/job-types.enum";

export class Jobs extends BaseModel {
    id: string;
    title: string;
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
    createdAt: Date;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.employer = new Employer(attributes.employer);
        this.requirements = new RequirementsModel(attributes.requirements);
    }
}

export class JobResponse extends BaseModel {
    results: Jobs[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.results = attributes.results.map(job => new Jobs(job));
    }
}
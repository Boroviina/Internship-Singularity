import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";
import {Employer} from "./employer.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    employer: Employer;
    requirementsModel: RequirementsModel;
    location: string;
    salary: number;
    employmentType: string;
    description: string;
    appDeadline: Date;
    remote: string;
    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;
    createdAt: Date;



    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);

    }
}
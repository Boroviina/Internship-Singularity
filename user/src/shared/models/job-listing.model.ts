import {BaseModel} from "./base.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    // companyName: string;
    // location: string;
    appDeadline: Date;
    description: string;
    // requirements: RequirementsModel;
    education: string;
    skills: string;
    language: string;
    driverLicence: boolean;
    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
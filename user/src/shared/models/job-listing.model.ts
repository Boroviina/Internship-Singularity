import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    //companyLogo: img?
    companyName: string;
    location: string;
    salary: string;
    employmentType: string;
    description: string;
    appDeadline: Date;
    remote: string;
    datePosted: Date;

    requirementsModel: RequirementsModel;

    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
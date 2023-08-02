import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    //companyLogo: img?
    companyName: string;
    requirementsModel: RequirementsModel;
    location: string;
    salary: number;
    employmentType: string;
    description: string;
    appDeadline: Date;
    remote: string;
    datePosted: Date;
    appInstructions: string;
    positionsNum: number;
    cv: boolean;
    coverLetter: boolean;



    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
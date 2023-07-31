import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    monthlyPay: number;
    appDeadline: Date;
    description: string;
    remote: string;

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
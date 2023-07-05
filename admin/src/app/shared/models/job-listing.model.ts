import {BaseModel} from "./base.model";
import {RequirementsModel} from "./requirements.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    // companyName: string;
    // location: string;
    applicationDeadline: Date;
    description: string;
    requirements: RequirementsModel;
    applicationInstructions: string;
    positionNumber: number;
    cv: boolean;
    coverLetter: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
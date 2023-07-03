import {BaseModel} from "./base.model";

export class JobListing extends BaseModel {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    applicationDeadline: Date;
    description: string;
    requirements: string;
    applicationInstructions: string;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
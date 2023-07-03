import {BaseModel} from "./base.model";

export class JobListing extends BaseModel {
    id: string;
    job_title: string;
    company_name: string;
    location: string;
    application_deadline: Date;
    description: string;
    requirements: string;
    applicationInstructions: string;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
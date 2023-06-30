import { BaseModel } from "./base.model";

// export class JobListingModel extends BaseModel {
export class JobListingModel {
    id: string;
    job_title: string;
    company_name: string;
    location: string;
    application_deadline: Date;
    description: string;
    requirements: string;
    applicationInstructions: string;
}
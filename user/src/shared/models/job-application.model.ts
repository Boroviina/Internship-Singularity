import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";
import {JobListing} from "./job-listing.model";

 export class JobApplication extends BaseModel {
    id: string;
    user: UserModel;
    job: JobListing;
    phoneNumber: string;
    cv: string;
    coverLetter: string;
    additionalDocument: string;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        this.user = new UserModel(attributes.user);
        this.job = new JobListing(attributes.job);
    }
}

export class JobApplicationRes extends BaseModel {
    results: JobApplication[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes)
        this.results = attributes.results.map(application => new JobApplication(application));
    }
}


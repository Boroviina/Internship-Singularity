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
    }
}


import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";
import {JobListing} from "./job-listing.model";

export class SavedJob extends BaseModel {
    id: string;
    user: UserModel;
    job: JobListing;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
        // this.user = new UserModel(attributes.user);
        this.job = new JobListing(attributes.job);
    }
}


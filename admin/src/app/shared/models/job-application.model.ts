import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";
import {Jobs} from "./job-listing.model";
import {ApplicationPhases} from "../enums/application-phases";

export class JobApplication extends BaseModel {
    id: string;
    user: UserModel;
    job: Jobs;
    phoneNumber: string;
    cv: string;
    coverLetter: string;
    additionalDocument: string;
    applicationPhase: ApplicationPhases;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
export class JobApplicationRes extends BaseModel{
    results: JobApplication[];
    page: number;
    limit: number;
    totalPages: number;
    totalResult: number;

    constructor(attributes?:any) {
        super();
        this.setAttributes(attributes);
        this.results=attributes.results.map(app=>new JobApplication(app));
    }
}

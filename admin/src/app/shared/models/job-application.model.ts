import {BaseModel} from "./base.model";

export class JobApplication extends BaseModel {
    id: string;
    user: string;
    job: string;
    phoneNumber: string;
    cv: string;
    coverLetter: string;
    additionalDocument: string;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}


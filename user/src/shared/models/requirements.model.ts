import {BaseModel} from "./base.model";

export class RequirementsModel extends BaseModel {
    education: string;
    skills: string;
    language: string;
    driverLicense: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}


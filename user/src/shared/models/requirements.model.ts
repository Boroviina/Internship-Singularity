import {BaseModel} from "./base.model";

export class RequirementsModel extends BaseModel {
    specialization: string;
    experience: string;
    education: string;
    skills: string;
    language: string;
    driverLicence: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}


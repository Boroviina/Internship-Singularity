import {BaseModel} from "./base.model";


export class RequirementsModel extends BaseModel {
    specialization: string;
    experience: string;
    education: string;
    skills: string;
    language: string;
    drivingLicense: boolean;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}


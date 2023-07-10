import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";

export class Employer extends BaseModel {
    adminUser: UserModel;
    companyName: string;
    industry: string;
    users: [UserModel];
    numOfEmployees: bigint;
    city: string;
    address: string;
    companyEmail: string;
    phone: string;
    fax: string;

    constructor(attributes?: any) {
        super();
        this.setAttributes(attributes);
    }
}
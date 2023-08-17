import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";

export class Employer extends BaseModel {
    id?: string;
    adminUser: UserModel;
    companyName: string;
    industry: string;
    users: [UserModel];
    numOfEmployees: number;
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
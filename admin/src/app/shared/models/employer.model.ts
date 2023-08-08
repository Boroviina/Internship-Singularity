import {BaseModel} from "./base.model";
import {UserModel} from "./user.model";

export class Employer extends BaseModel {
    id?: string;
    user: UserModel;
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

    // constructor(user?: User, companyName?: string, industry?: string, numOfEmployees?: number, city?: string,
    //             address?: string, companyEmail?: string, phone?: string, fax?: string, attributes?: any) {
    //     super();
    //     this.setAttributes(attributes);
    //     this.user = user;
    //     this.companyName = companyName;
    //     this.industry = industry;
    //     this.numOfEmployees = numOfEmployees;
    //     this.city = city;
    //     this.address = address;
    //     this.companyEmail = companyEmail;
    //     this.phone = phone;
    //     this.fax = fax;
    // }
}

export class User {
    name: string;
    email: string;
    password: string;

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.name = firstName + " " + lastName;
        this.email = email;
        this.password = password;
    }
}
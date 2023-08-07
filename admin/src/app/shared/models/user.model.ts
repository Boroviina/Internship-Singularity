import {BaseModel} from "./base.model";
import {Language} from "../enums/languages.enum";

export class UserModel extends BaseModel {
  id: number;
  name: string;
  email: string;
  role: string;
  isEmailVerified: string;
  occupation?: string;
  companyName?: string;
  phone?: string;
  language?: Language;
  gender?: 'male' | 'female' | 'other';
  active?: boolean;
  country?: string;
  birthDate?: Date;
  timeZone?: string;
  website?: 'https://keenthemes.com';

  constructor(attributes?: any) {
    super();
    this.setAttributes(attributes);
  }
}

export class UsersResponse extends BaseModel {
  results: UserModel[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;

  constructor(attributes?: any) {
    super();
    this.setAttributes(attributes);
    this.results = attributes.results.map(user => new UserModel(user));
  }
}
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  id: number;
  name: string;
  email: string;
  role: string;
  isEmailVerified: string;
  occupation?: string;
  companyName?: string;
  phone?: string;
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru';
  timeZone?: string;
  website?: 'https://keenthemes.com';

  constructor(attributes?: any) {
    super();
    this.setAttributes(attributes);
  }
}
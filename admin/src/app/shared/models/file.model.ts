import {BaseModel} from "./base.model";

export class FileModel extends BaseModel{
    id:string;
    filename: string;
    originalname: string;
    fieldname:string;
    size:number;
    mimetype: string;
    encoding: string;


constructor(attributes?: any){
    super();
    this.setAttributes(attributes);
}
}
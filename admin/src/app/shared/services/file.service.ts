import ApiClient from "./api-client/api-client";
import {FileModel} from "../models/file.model";

const FILES_ENDPOINT = '/files';

const getFileDetails = (fileID: string)=> {
    return ApiClient.get(`${FILES_ENDPOINT}/${fileID}`).then(response => {
        return response.data;
    })
}

export {getFileDetails};
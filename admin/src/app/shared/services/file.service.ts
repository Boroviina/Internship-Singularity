import ApiClient from "./api-client/api-client";
import {JobListing} from "../models/job-listing.model";

const FILES_ENDPOINT = '/files';

const getFile = (userId: string)=> {
    return ApiClient.get(`${FILES_ENDPOINT}/${userId}`).then(response => {
        return response.data;
    })
}

export {getFile};
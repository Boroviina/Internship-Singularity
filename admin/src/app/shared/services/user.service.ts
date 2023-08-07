import ApiClient from './api-client/api-client';
import {UserModel} from "../models/user.model";

const USERS_ENDPOINT = '/users';

export const getUsers = (): Promise<UserModel[] | null> => {
    return ApiClient.get(USERS_ENDPOINT)
        .then(response => response.data)
        .then(data => data.results.map(user => new UserModel(user)))
}

export const getUsersWithPages = (page: number) => {
    return ApiClient.get(USERS_ENDPOINT, `page=${page}`)
        .then(response => response.data)
        // .then(data => data.results.map(user => new UserModel(user)))
}

export const getUser = (userId: string): Promise<UserModel | null> => {
    return ApiClient.get(`${USERS_ENDPOINT}/${userId}`)
        .then(response => response.data)
        .then(data =>  new UserModel(data))
}

export const updateUser = (userId: string, user): Promise<UserModel | null> => {
    return ApiClient.patch(`${USERS_ENDPOINT}/${userId}`, user)
        .then(response => response.data)
        .then(data => new UserModel(data))
}

export const createUser = (user): Promise<UserModel | null> => {
    return ApiClient.post(USERS_ENDPOINT, user)
        .then(response => response.data)
        .then(data => new UserModel(data))
}

export const deleteUser = (userId: string): Promise<any> => {
    return ApiClient.remove(`${USERS_ENDPOINT}/${userId}`)
        .then(response => response.data)
}

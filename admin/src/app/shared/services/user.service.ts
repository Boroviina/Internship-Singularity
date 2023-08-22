import ApiClient from './api-client/api-client';
import {UserModel} from "../models/user.model";
import {UsersResponse} from "../models/user.model";

const USERS_ENDPOINT = '/users';

export const getUsers = (): Promise<UserModel[] | null> => {
    return ApiClient.get(USERS_ENDPOINT)
        .then(response => response.data)
        .then(data => data.results.map(user => new UserModel(user)))
}

export const getNumberOfEmployers = (): Promise<number | null> => {
    return ApiClient.get(USERS_ENDPOINT, 'role=employer')
        .then(response => response.data.totalResults)
}

export const getNumberOfUsers = (): Promise<number | null> => {
    return ApiClient.get(USERS_ENDPOINT, 'role=user')
        .then(response => response.data.totalResults)
}

export const getNumberOfAdmins = (): Promise<number | null> => {
    return ApiClient.get(USERS_ENDPOINT, 'role=admin')
        .then(response => response.data.totalResults)
}

export const getUsersWithPages = (page: number): Promise<UsersResponse | null> => {
    return ApiClient.get(USERS_ENDPOINT, `page=${page}`)
        .then(response => new UsersResponse(response.data))
}

export const getFilteredUsersWithPages = (page: number, filter): Promise<UsersResponse | null> => {
    let query = '';
    for (const key in filter) {
        if (filter[key] !== '') {
            query += `&${key}=${filter[key]}`
        }
    }
    return ApiClient.get(USERS_ENDPOINT, `page=${page}${query}`)
        .then(response => new UsersResponse(response.data))
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

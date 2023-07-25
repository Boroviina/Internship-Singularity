import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const prepareQuery = (query?: string): string => {
  return query ? '?' + query : '';
}

const get = (endpoint: string, query?: string): Promise<AxiosResponse> => {

  return axiosInstance.get(`${endpoint}${prepareQuery(query)}`);
};

const post = (endpoint: string, body: any, query: string = ''): Promise<AxiosResponse> => {
  return axiosInstance.post(`${endpoint}${query}`, body);
};

const postWithFiles = (endpoint: string, body: FormData, query: string = ''): Promise<AxiosResponse> => {
  return axiosInstance.post(`${endpoint}${query}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  });
};

const put = (endpoint: string, body: any, query: string = ''): Promise<AxiosResponse> => {
  return axiosInstance.put(`${endpoint}${query}`, body);
};

const remove = (endpoint: string, query: string = ''): Promise<AxiosResponse> => {
  return axiosInstance.delete(`${endpoint}${query}`);
};

const ApiClient = {get, post, postWithFiles, put, remove};

export default ApiClient;

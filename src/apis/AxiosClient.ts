import { Notification } from '@/utils';
import axios from 'axios';
import LocalStorage from './LocalStorage';

const API_URL = 'http://43.231.65.134:8080';
//const API_URL = 'http://localhost:3000'
const AxiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
    },
});

// handle request to convert all api requests to snake_case
AxiosClient.interceptors.request.use(async (config: any) => {
    const token = LocalStorage.getToken();

    const newConfig = { ...config };
    if (token && newConfig.headers) {
        newConfig.headers.Authorization = `Bearer ${token}`;
    }

    if (newConfig.headers && newConfig.headers['Content-Type'] === 'multipart/form-data') return newConfig;

    // convert request to snake_case
    if (config.params) {
        newConfig.params = config.params;
    }
    if (config.data) {
        newConfig.data = config.data;
    }

    return newConfig;
});

AxiosClient.interceptors.response.use(
    (response: any) => {
        // if (response && response.data.result) {
        //     if (response.data.result.errorMessage !== 'Successfully') {
        //         Notification('error', response?.data?.result.errorMessage);
        //         return;
        //     }
        //     return response.data;
        // }

        return response.data;
    },
    (error) => {
        console.log(error.response.data.statusCode);
        // Handle errors
        // error?.response?.data?.message && Notification('error', error?.response?.data?.message);
        return Promise.reject(error?.response?.data?.message);
    }
);

export default AxiosClient;

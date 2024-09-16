import axios from "axios"
import type {AxiosInstance} from 'axios'
import {useAuthStore} from "@/store/modules/authStore.js";
import lockScreen from '@/util/lockScreen';

const baseURL = import.meta.env.VITE_BASE_URL

const http: AxiosInstance = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

http.interceptors.request.use(
    (config) => {
        const accessToken: string | null = useAuthStore().getAccessToken;

        config.headers["Authorization"] = `Bearer ${accessToken}`
        return {
            ...config
        }
    },
    (error): void => {
        Promise.reject(error).then();
    }
);


http.interceptors.response.use(
    (response) => {
        lockScreen('close').close()
        return response.data;
    },
    async (serverError) => {
        lockScreen('close').close()
        const {response: {data: {error, errors, message}, status}, config} = serverError;

        // if (status === 401 && !config.retry) {
        //     config.retry = true;
        //
        //     try {
        //         await useAuthStore().refreshToken();
        //         return http(config);
        //     } catch (e) {
        //         console.dir(e);
        //
        //         // if (!AccessService.getRefreshToken()) {
        //         //     AccessService.clearStorage()
        //         //     window.location.href = '/login';
        //         // }
        //
        //         return Promise.reject(e)
        //     }
        // }
        const errorMessage = error ? error : message
        const result = errorMessage ? [errorMessage] : errors
        return Promise.reject(result)
    }
)

const httpInstance = (config: {}) => {
    return http(config);
};

export default class Api {
    static get(url: string, params: {} = {}) {
        return httpInstance({url, method: 'get', params});
    }

    static post(url: string, data: {} = {}, isLockScreen: boolean = true) {
        if (isLockScreen) {
            lockScreen();
        }
        return httpInstance({url, method: 'post', data});
    }

    static put(url: string, data: {} = {}, lock: boolean = true) {
        if (lock) {
            lockScreen();
        }
        return httpInstance({url, method: 'put', data});
    }

    static delete(url: string) {
        lockScreen();
        return httpInstance({url, method: 'delete'});
    }

    static download(url: string, params: {} = {}) {
        return httpInstance({
            url,
            method: 'get',
            responseType: 'blob',
            params
        });
    }
};

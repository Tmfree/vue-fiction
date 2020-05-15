import axios from 'axios';
import store from '@/store';
import { getToken, removeToken } from '@/utils/auth'
const server = axios.create({
    baseURL: process.env.VUE_APP_BASEURL
});
// Add a request interceptor
server.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = getToken()
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
server.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.code === -1) {
        removeToken();
        return response;
    } else {
        return response;
    }

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default server;
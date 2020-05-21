import axios from 'axios';
import { Toast } from 'vant';
import { getToken, removeToken } from '@/utils/auth'
const server = axios.create({
    baseURL: process.env.VUE_APP_BASEURL
});
// Add a request interceptor
server.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (getToken()) {
        config.headers['Authorization'] = getToken()
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
server.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.code === 50001 || response.data.code === 50002) {
        Toast({
            message:'未登录',
            className:'custom-toast',
            duration: 2000
        });
        removeToken();
        return response.data;
    } else {
        return response.data;
    }

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default server;
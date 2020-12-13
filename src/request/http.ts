import axios from 'axios';
import { Dialog } from 'vant'
import router from "../router"
import { getToken } from '@/utils/auth'
const server = axios.create({
    baseURL: process.env.VUE_APP_BASEURL
});
// Add a request interceptor
server.interceptors.request.use(function (config) {
    if (config.method.toLocaleUpperCase() == 'POST') {
        config.data = config.params;
    }
    // Do something before request is sent
    if (getToken('User-Token')) {
        config.headers['Authorization'] = getToken('User-Token')
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
server.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.code == 4001) {
        Dialog.confirm({
            message: response.data.msg
        }).then(() => {
            // on confirm
            router.replace(`/login?redirect=${router.currentRoute.path}`)
        }).catch(() => {
            // on cancel
        });
        Dialog.setDefaultOptions({
            closeOnClickOverlay: true,
            confirmButtonColor: ''
        })
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default server;
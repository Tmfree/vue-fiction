const axios = require('axios');
const config = require('../config.json');
const server = axios.create({
    baseURL: config.baseUrl,
    timeout: 6000
});
// Add a request interceptor
server.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
server.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
module.exports = server;

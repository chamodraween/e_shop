// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';

// Create an instance of Axios with a custom baseURL
const AxiosInstance = axios.create({
    baseURL: 'http://192.168.8.100:8006', // Replace with your API's baseURL
    // You can also configure other Axios options here, such as headers, timeouts, etc.
});

export default AxiosInstance;
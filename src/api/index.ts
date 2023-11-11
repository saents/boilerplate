import axios, { AxiosInstance } from 'axios';

axios.defaults.baseURL = 'https://api.exampleasdads.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const API: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com'
});

API.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export default API;
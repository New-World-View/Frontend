import axios from 'axios';

const api = axios.create({
    baseURL: 'https://admin.nwv.agency/',
});

export default api;

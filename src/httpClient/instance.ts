import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL,
    timeout: 1000 * 60 * 2,
});

export default axiosInstance;

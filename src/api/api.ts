import axios from 'axios';

export const API_BASE_URL = 'http://45.195.90.183:4000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;

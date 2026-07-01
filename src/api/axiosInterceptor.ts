import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '@/api/api';
import { secureStorage } from '@/utils/secureStorage';
import { store } from '@/redux/store';
import { logout } from '@/redux/slices/loginSlice';

const axiosInterceptor = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isLoggingOut = false;

// Request
axiosInterceptor.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await secureStorage.getItem('AUTH_TOKEN');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// Response
axiosInterceptor.interceptors.response.use(
  response => response,

  async (error: AxiosError<any>) => {
    if (error.response?.status === 401 && !isLoggingOut) {
      isLoggingOut = true;

      try {
        await secureStorage.removeItem('AUTH_TOKEN');
        await secureStorage.removeItem('REFRESH_TOKEN');
      } catch (e) {
        console.log('Storage clear failed', e);
      }

      store.dispatch(logout());

      isLoggingOut = false;
    }

    return Promise.reject(error);
  },
);

export default axiosInterceptor;

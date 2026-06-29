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

// ================= REQUEST =================
axiosInterceptor.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    try {
      const token = await secureStorage.getItem('AUTH_TOKEN');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (__DEV__) {
        console.log('REQUEST =>', config.method?.toUpperCase(), config.url);
        console.log('BODY =>', config.data);
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => Promise.reject(error),
);

// ================= RESPONSE =================
axiosInterceptor.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log('RESPONSE =>', response.data);
    }

    return response;
  },

  async (error: AxiosError<any>) => {
    if (__DEV__) {
      console.log('ERROR =>', error.response?.data);
    }

    if (error.response?.status === 401) {
      await secureStorage.removeItem('AUTH_TOKEN');
      await secureStorage.removeItem('REFRESH_TOKEN');

      store.dispatch(logout());
    }

    return Promise.reject(error);
  },
);

export default axiosInterceptor;

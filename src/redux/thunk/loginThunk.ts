import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest } from '@/typing/auth.types';
import { loginService } from '../services/loginService';
import { ASYNC_ROUTES } from '../constants';
import { secureStorage } from '@/utils/secureStorage';

export const loginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (data: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await loginService(data);

      await secureStorage.setItem(
        'AUTH_TOKEN',
        response.data.tokens.accessToken,
      );

      await secureStorage.setItem(
        'REFRESH_TOKEN',
        response.data.tokens.refreshToken,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ??
          error?.message ??
          'Something went wrong',
      );
    }
  },
);

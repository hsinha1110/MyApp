import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginRequest } from '@/typing/auth.types';
import { loginService } from '../services/loginService';
import { ASYNC_ROUTES } from '../constants';

export const loginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (data: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await loginService(data);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ??
          error?.message ??
          'Something went wrong',
      );
    }
  },
);

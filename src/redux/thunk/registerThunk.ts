import { createAsyncThunk } from '@reduxjs/toolkit';

import { RegisterRequest, RegisterResponse } from '@/typing/auth.types';

import { registerService } from '@/redux/services/registerService';
import { ASYNC_ROUTES } from '../constants';

export const registerAsyncThunk = createAsyncThunk<
  RegisterResponse,
  RegisterRequest,
  { rejectValue: string }
>(ASYNC_ROUTES.REGISTER, async (data, { rejectWithValue }) => {
  try {
    const response = await registerService(data);

    return response;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message ??
        error?.message ??
        'Something went wrong',
    );
  }
});

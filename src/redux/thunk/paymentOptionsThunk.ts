import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '@/redux/constants';
import { paymentOptionsService } from '../services/paymentOptions';

export const paymentOptionsThunk = createAsyncThunk(
  ASYNC_ROUTES.PAYMENT_OPTIONS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await paymentOptionsService();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Failed to fetch payment options',
      );
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { placeOrderService } from '@/redux/services/placeOrderService';
import { ASYNC_ROUTES } from '@/redux/constants';

export const placeOrderThunk = createAsyncThunk(
  ASYNC_ROUTES.PLACE_ORDER,
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await placeOrderService(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Failed to place order',
      );
    }
  },
);

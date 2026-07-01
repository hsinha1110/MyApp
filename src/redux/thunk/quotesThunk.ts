import { createAsyncThunk } from '@reduxjs/toolkit';
import { quoteService } from '@/redux/services/quotesService';
import { ASYNC_ROUTES } from '../constants';

export const quoteThunk = createAsyncThunk(
  ASYNC_ROUTES.ORDER_QUOTE,
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await quoteService(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Failed to get order quote',
      );
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsService } from '../services/getProductService';
import { ASYNC_ROUTES } from '../constants';

export const getProductsAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductsService();

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

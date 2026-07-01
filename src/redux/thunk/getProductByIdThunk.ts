import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getProductsByIdService } from '../services/getProductByIdService';
import { ASYNC_ROUTES } from '../constants';

export const getProductsByIdThunk = createAsyncThunk(
 ASYNC_ROUTES.GET_PRODUCTS_BY_ID,
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await getProductsByIdService(productId);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }

      return rejectWithValue('Something went wrong');
    }
  },
);

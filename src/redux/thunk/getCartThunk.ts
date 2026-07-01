import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCartService } from '../services/getCartService';
import { ASYNC_ROUTES } from '../constants';

export const getCartThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_CART,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCartService();
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || 'Something went wrong',
        );
      }

      return rejectWithValue('Something went wrong');
    }
  },
);

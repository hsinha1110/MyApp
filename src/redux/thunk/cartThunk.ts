import { AddToCartPayload } from '@/typing/cart.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cartService } from '../services/cartService';
import { ASYNC_ROUTES } from '../constants';

export const cartThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_CART,
  async (payload: AddToCartPayload, { rejectWithValue }) => {
    try {
      const response = await cartService(payload);
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

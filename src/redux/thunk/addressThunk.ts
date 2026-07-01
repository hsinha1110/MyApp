import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { addAddressService } from '@/redux/services/getAddressService';
import { AddressFormData } from '@/typing/address.types';
import { ASYNC_ROUTES } from '../constants';

export const addAddressThunk = createAsyncThunk(
  ASYNC_ROUTES.ADDRESS,
  async (payload: AddressFormData, { rejectWithValue }) => {
    try {
      const response = await addAddressService(payload);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || 'Unable to save address',
        );
      }

      return rejectWithValue('Something went wrong');
    }
  },
);

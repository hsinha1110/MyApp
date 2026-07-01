import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES, PAGINATION } from '@/redux/constants';
import { getOrdersService } from '@/redux/services/getOrderService';
import { GetOrdersPayload } from '@/typing/order.types';

export const getOrdersThunk = createAsyncThunk(
  ASYNC_ROUTES.ORDERS,
  async (payload: GetOrdersPayload = {}, { rejectWithValue }) => {
    try {
      const page = payload.page ?? PAGINATION.DEFAULT_PAGE;
      const limit = payload.limit ?? PAGINATION.DEFAULT_LIMIT;

      console.log('GET ORDERS API CALLED');
      console.log('PAGE =>', page);
      console.log('LIMIT =>', limit);

      const response = await getOrdersService(page, limit);

      console.log('GET ORDERS RESPONSE =>', JSON.stringify(response, null, 2));

      return response;
    } catch (error: any) {
      console.log('GET ORDERS ERROR =>', error?.response?.data || error);

      return rejectWithValue(
        error?.response?.data?.message || 'Failed to fetch orders',
      );
    }
  },
);

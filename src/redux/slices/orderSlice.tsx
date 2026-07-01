import { createSlice } from '@reduxjs/toolkit';
import { getOrdersThunk } from '@/redux/thunk/getOrderThunk';
import { OrdersState } from '@/typing/order.types';

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(getOrdersThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.loading = false;

        console.log(
          'ORDERS PAYLOAD =>',
          JSON.stringify(action.payload, null, 2),
        );

        state.orders = action.payload?.data ?? [];
      })

      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;

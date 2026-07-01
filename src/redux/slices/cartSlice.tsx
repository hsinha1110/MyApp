import { createSlice } from '@reduxjs/toolkit';
import { cartThunk } from '@/redux/thunk/cartThunk';
import { CartState } from '../types';

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(cartThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(cartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.data;
      })

      .addCase(cartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getProductsAsyncThunk } from '@/redux/thunk/getProductThunk';
import { ProductState } from '@/typing/product.types';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getProductsAsyncThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProductsAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;

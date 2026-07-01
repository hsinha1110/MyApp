import { createSlice } from '@reduxjs/toolkit';
import { getProductsAsyncThunk } from '@/redux/thunk/getProductThunk';
import { getProductsByIdThunk } from '@/redux/thunk/getProductByIdThunk';
import { ProductState } from '@/typing/product.types';

const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},

  extraReducers: builder => {
    // Get All Products
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

    // Get Product By Id
    builder
      .addCase(getProductsByIdThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
      })
      .addCase(getProductsByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;

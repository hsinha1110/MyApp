import { createSlice } from '@reduxjs/toolkit';
import { paymentOptionsThunk } from '@/redux/thunk/paymentOptionsThunk';

const initialState = {
  providers: [],
  settings: {},
  loading: false,
};

const paymentOptionsSlice = createSlice({
  name: 'paymentOptions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(paymentOptionsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(paymentOptionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.providers = action.payload.data.providers;
        state.settings = action.payload.data.settings;
      })
      .addCase(paymentOptionsThunk.rejected, state => {
        state.loading = false;
      });
  },
});

export default paymentOptionsSlice.reducer;

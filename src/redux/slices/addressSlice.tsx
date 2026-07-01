import { createSlice } from '@reduxjs/toolkit';
import { addAddressThunk } from '@/redux/thunk/addressThunk';

export interface Address {
  _id: string;
  label: 'home' | 'office' | 'other';
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

interface AddressState {
  loading: boolean;
  error: string | null;
  addresses: Address[];
}

const initialState: AddressState = {
  loading: false,
  error: null,
  addresses: [],
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(addAddressThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addAddressThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.addresses = Array.isArray(action.payload.data)
          ? action.payload.data
          : [action.payload.data];
      })

      .addCase(addAddressThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default addressSlice.reducer;

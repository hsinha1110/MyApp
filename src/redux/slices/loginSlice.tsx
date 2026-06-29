import { createSlice } from '@reduxjs/toolkit';
import { loginAsyncThunk } from '@/redux/thunk/loginThunk';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: state => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginAsyncThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        console.log('FULFILLED CALLED');

        state.isLoggedIn = true;
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        console.log('REJECTED CALLED');

        state.loading = false;
        state.isLoggedIn = false;
        state.error = (action.payload as string) ?? 'Something went wrong';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

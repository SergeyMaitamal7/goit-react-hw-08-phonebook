import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

const initialState = {
  user: { neme: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {},
    [register.fulfilled]: (state, action) => {
      console.log(action);
      console.log(action.meta.arg);
      state.user = action.meta.arg;
      // console.log(state.user);
    },
    [register.rejected]: (state, action) => {},
  },
});
export const authReducer = authSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentions, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentions);
      console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const register = createAsyncThunk('auth/register', async credentions => {
//   console.log(credentions);
//   try {
//     const response = await axios.post('/users/signup', credentions);
//     console.log(response);
//     setToken(response.data.token);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const logIn = createAsyncThunk('auth/logIn', async credention => {
  try {
    const response = await axios.post('/users/login', credention);
    console.log(response);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk('auth/logout', async credention => {
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    clearToken();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      console.log('tokena net');
      return thunkAPI.rejectWithValue();
    }
    try {
      setToken(persistToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

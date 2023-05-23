import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async credentions => {
  console.log(credentions);
  try {
    const response = await axios.post('/users/signup', credentions);
    console.log(response);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/register', async credention => {
  try {
    const response = await axios.post('/users/login', credention);
    console.log(response);
    setToken(response.data.token);
    return response.data;
  } catch (error) {}
});
export const logOut = createAsyncThunk('auth/register', async credention => {
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    clearToken();

    return response.data;
  } catch (error) {}
});

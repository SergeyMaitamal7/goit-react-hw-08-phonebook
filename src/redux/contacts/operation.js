import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from 'redux/auth/authOperations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const replaceContact = createAsyncThunk('contact/replaceContact', 
async (replaceContact, thunkAPI) => {
  try {
    const response = await axios.patch(`/contacts/${replaceContact.id}`, {name: replaceContact.name, number: replaceContact.number});
    return response.data;
    console.log(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
)
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apdateContact = createAsyncThunk(
  'contacts/apdateContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`);
      console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

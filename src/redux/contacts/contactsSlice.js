import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  replaceContact,
  deleteContact,
  addContact,
} from './operation';
import { logOut } from 'redux/auth/authOperations';
const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
      console.log(state);
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
      console.log(action);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      const indexDeleteElement = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(indexDeleteElement, 1);
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logOut.pending]: (state, action) => {
      state.isLoading = false;
    },
    [logOut.fulfilled]: (state, action) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;

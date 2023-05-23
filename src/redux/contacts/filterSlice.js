import { createSlice } from '@reduxjs/toolkit';



export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlise.reducer;
export const { setFilter } = filterSlise.actions;

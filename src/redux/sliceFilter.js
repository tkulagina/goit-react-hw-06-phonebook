import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setFilter } = sliceFilter.actions;

export const getFilter = state => state.filter;
export const filterReducer = sliceFilter.reducer;
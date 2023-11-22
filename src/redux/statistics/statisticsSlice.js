import { getAllStatistics } from './statisticsOperations';

const { createSlice } = require('@reduxjs/toolkit');
const {
  handlePending,
  handleFulfilled,
  handleRejected,
} = require('./statisticsReducers');

const initialState = {
  statistics: {},
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllStatistics.pending, handlePending);
    builder.addCase(getAllStatistics.fulfilled, handleFulfilled);
    builder.addCase(getAllStatistics.rejected, handleRejected);
  },
});

export const statisticsReducer = statisticsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'redux/services/instanceAPI';
import notifyOptions from 'utils/NotifyOptions';
import { BACKEND_STATISTICS } from 'utils/const';

export const getAllStatistics = createAsyncThunk(
  'statistics/getAllStatistics',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(BACKEND_STATISTICS);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

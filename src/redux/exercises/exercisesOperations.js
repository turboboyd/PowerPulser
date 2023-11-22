import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";
import { BACKEND_EXERCISES_FILTER_URL, BACKEND_EXERCISES_URL } from "../../utils/const";

export const fetchExercisesFilter = createAsyncThunk('exercises/fetchExercisesFilter', async (params, thunkAPI) => {
    // const params = {
    //     type: 'string', ('Body parts', 'Muscles', 'Equipment')
    //     page: 'string' || Number, 
    //     limit: 'string' || Number,
    // }
    try {
        token.set(tokenState(thunkAPI));
        const paramsURL = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
        const {data} = await instance.get(`${BACKEND_EXERCISES_FILTER_URL}?${paramsURL}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchExercisesItemsSelectedFilter = createAsyncThunk('exercises/fetchExercisesItemsSelectedFilter', async ({ params, cancelToken }, thunkAPI) => {
    //   const params = {
    //     id: 'string', 
    //     page: 'string' || Number, 
    //     limit: 'string' || Number,
    // }
    try {
        const paramsURL = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
        token.set(tokenState(thunkAPI));
        const { data } = await instance.get(`${BACKEND_EXERCISES_URL}?${paramsURL}`,{
                cancelToken: cancelToken,
        });
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
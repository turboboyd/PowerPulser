import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";
import { BACKEND_DIARY_EXERCISES_URL, BACKEND_DIARY_PRODUCTS_URL, BACKEND_DIARY_URL } from "../../utils/const";

export const fetchAllDiary = createAsyncThunk('diary/fetchAllDiary', async (_, thunkAPI) => {
    try {
        token.set(tokenState(thunkAPI));
        const { data } = await instance.get(BACKEND_DIARY_URL);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addProductDiary = createAsyncThunk('diary/addProductDiary', async (credentials, thunkAPI) => {
    // credentials: {
    //     date: "2023-11-13",
    //     product: "5d51694902b2373622ff5773",
    //     weight: 13,
    //     calories: 13
    // }; 

    try {
        token.set(tokenState(thunkAPI));
        const { data } = await instance.post(BACKEND_DIARY_PRODUCTS_URL, credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteProductDiary = createAsyncThunk('diary/deleteProductDiary', async (idProduct, thunkAPI) => {
    try {
        token.set(tokenState(thunkAPI));
        const { data } = await instance.delete(`${BACKEND_DIARY_PRODUCTS_URL}/${idProduct}` );
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addExercisesDiary = createAsyncThunk('diary/addExercisesDiary', async (credentials, thunkAPI) => {
    // credentials: {
    //     date: "2023-11-13",
    //     product: "5d51694902b2373622ff5773",
    //     time: 13,
    //     calories: 13
    // }; 

    try {
        token.set(tokenState(thunkAPI));
        const { data } = await instance.post(BACKEND_DIARY_PRODUCTS_URL, credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteExercisesDiary = createAsyncThunk('diary/deleteExercisesDiary', async (idExercises, thunkAPI) => {
    try {
        token.set(tokenState(thunkAPI));
        const { data } = await instance.delete(`${BACKEND_DIARY_EXERCISES_URL}/${idExercises}` );
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

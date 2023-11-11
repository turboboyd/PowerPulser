import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/services/instanceAPI";
import { token } from "redux/services/tokenAPI";
import { BACKEND_LOGOUT_URL, BACKEND_REFRESH_URL, BACKEND_SIGN_IN_URL, BACKEND_SIGN_UP_URL } from "../../utils/const";
// import { toast } from 'react-toastify';

//react-toastify не підключена бібліотека, прописано як один із варіантів нотіфікашки

export const registrationUser = createAsyncThunk('auth/registrationUser', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post(BACKEND_SIGN_UP_URL, credentials);
        token.set(data.user.token)
        // toast.success('REGISTRATION SUCCESS!', optionNotification);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post(BACKEND_SIGN_IN_URL, credentials);
        token.set(data.user.token)
        // toast.success('LOGIN SUCCESS!', optionNotification);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutUser = createAsyncThunk('auth/logOutUser', async (_, thunkAPI) => {
    try {
        const tokenStorage = thunkAPI.getState().auth.user.token;
        await instance.post(BACKEND_LOGOUT_URL, tokenStorage);
        token.clear()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
    try {
        const tokenStorage = thunkAPI.getState().auth.token;
        const { data } = await instance.get(BACKEND_REFRESH_URL, tokenStorage);
        token.set(data.user.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

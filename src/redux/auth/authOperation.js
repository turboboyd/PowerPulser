import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { token } from "../services/tokenAPI";
import { BACKEND_LOGOUT_URL, BACKEND_REFRESH_URL, BACKEND_SIGN_IN_URL, BACKEND_SIGN_UP_URL, BACKEND_VERIFY_URL } from "../../utils/const";
// import { toast } from 'react-toastify';

//react-toastify не підключена бібліотека, прописано як один із варіантів нотіфікашки

export const registrationUser = createAsyncThunk('auth/registrationUser', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post(BACKEND_SIGN_UP_URL, credentials);
        // toast.success('REGISTRATION SUCCESS!', optionNotification);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const verifyUser = createAsyncThunk('auth/verifyUser', async (verificationToken , thunkAPI) => {
    try {
        await instance.get(`${BACKEND_VERIFY_URL}/:${verificationToken}`);
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
        token.set(tokenStorage)
        await instance.post(BACKEND_LOGOUT_URL);
        token.clear()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
    try {
        const tokenStorage = thunkAPI.getState().auth.user.token;
        token.set(tokenStorage)
        const { data } = await instance.get(BACKEND_REFRESH_URL);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/services/instanceAPI";
import { BACKEND_PRODUCT_URL } from "../../utils/const";
// import { token } from "redux/services/tokenAPI";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            // змінити auth.token в залежності від стейту авторизації
            // const tokenAPI = thunkAPI.getState().auth.token;
            // token.set(tokenAPI);
            const { data } = await instance.get(BACKEND_PRODUCT_URL);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


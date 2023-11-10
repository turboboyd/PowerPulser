import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/services/instanceAPI";
import { PRODUCT_ROUTE } from "../../utils/const";
// import { token } from "redux/services/tokenAPI";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            // змінити auth.token в залежності від стейту авторизації
            // const tokenAPI = thunkAPI.getState().auth.token;
            // token.set(tokenAPI);
            const { data } = await instance.get(PRODUCT_ROUTE);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


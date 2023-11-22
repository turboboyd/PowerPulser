import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { BACKEND_PRODUCT_CATEGORY_URL, BACKEND_PRODUCT_URL } from "../../utils/const";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async ({ numberPage, filterParams, cancelToken }, thunkAPI) => {
        try {
            const params = {
                ...numberPage,
                ...filterParams,
            };
            token.set(tokenState(thunkAPI));
            const paramsURL = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
            const { data } = await instance.get(`${BACKEND_PRODUCT_URL}?${paramsURL}`, {
                cancelToken: cancelToken,
            });
            return data.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const fetchProductsCategory = createAsyncThunk('products/fetchProductsCategory',
    async (_, thunkAPI) => {
        try {  
            token.set(tokenState(thunkAPI));
            const { data } = await instance.get(BACKEND_PRODUCT_CATEGORY_URL);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


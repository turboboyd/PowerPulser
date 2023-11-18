import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { BACKEND_PRODUCT_URL } from "../../utils/const";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async ({ numberPage, cancelToken }, thunkAPI) => {
        try {
            token.set(tokenState(thunkAPI));
            const paramsURL = Object.keys(numberPage).map(key => `${key}=${numberPage[key]}`).join('&')
            const { data } = await instance.get(`${BACKEND_PRODUCT_URL}?${paramsURL}`, {
                cancelToken: cancelToken,
            });
            
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


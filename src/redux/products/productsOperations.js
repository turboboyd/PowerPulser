import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/instanceAPI";
import { BACKEND_PRODUCT_URL } from "../../utils/const";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (credentials, thunkAPI) => {
        try {
            const paramsURL = Object.keys(credentials).map(key => `${key}=${credentials[key]}`).join('&')
            
            token.set(tokenState(thunkAPI));
            const { data } = await instance.get(`${BACKEND_PRODUCT_URL}?${paramsURL}`);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


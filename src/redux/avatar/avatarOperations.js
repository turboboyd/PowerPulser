import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_AVATAR_URL } from "../../utils/const";
import { configAxios } from "../services/configAxios";
import { instance } from "../services/instanceAPI";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";

export const uploadAvatar = createAsyncThunk( "avatar/uploadAvatar", async (formData, thunkAPI) => {
      try {
      token.set(tokenState(thunkAPI));

      const { data } = await instance.put(BACKEND_AVATAR_URL, formData, configAxios);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
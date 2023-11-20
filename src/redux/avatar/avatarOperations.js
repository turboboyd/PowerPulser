import { toast } from "react-toastify";
import notifyOptions from "../../utils/NotifyOptions";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_AVATAR_URL } from "../../utils/const";
import { configAxios } from "../services/configAxios";
import { instance } from "../services/instanceAPI";
import { token } from "../services/tokenAPI";
import { tokenState } from "../services/tokenState";

export const uploadAvatar = createAsyncThunk(
  "avatar/uploadAvatar",
  async (file, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      let formData = new FormData();
      formData.append("avatar", file);

      const { data } = await instance.patch(
        BACKEND_AVATAR_URL,
        formData,
        configAxios
      );

      return data;
    } catch (error) {
      toast.error("Oops... Something went wrong! Try again!", notifyOptions);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { toast } from 'react-toastify';
import notifyOptions from '../../utils/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../services/instanceAPI';
import { token } from '../services/tokenAPI';
import {
  BACKEND_LOGOUT_URL,
  BACKEND_PASSWORD_EMAIL_URL,
  BACKEND_PROFILE_URL,
  BACKEND_REFRESH_URL,
  BACKEND_SIGN_IN_URL,
  BACKEND_SIGN_UP_URL,
  BACKEND_VERIFY_URL,
} from '../../utils/const';
import { tokenState } from '../services/tokenState';

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, thunkAPI) => {
    // credentials: {
    //     name: String;
    //     email: String;
    //     password: String;
    // };
    try {
      const { data } = await instance.post(BACKEND_SIGN_UP_URL, credentials);
      toast.success(
        'A confirmation has been sent to your email. Please confirm your email!',
        notifyOptions
      );
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (verificationToken, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `${BACKEND_VERIFY_URL}/${verificationToken}`
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerifyUser = createAsyncThunk(
  'auth/verifyUser1',
  async (credentials, thunkAPI) => {
    // credentials: {
    //     email: string;
    // };
    try {
      await instance.get(BACKEND_VERIFY_URL, credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    // credentials: {
    //     email: string;
    //     password: string;
    // };
    try {
      const { data } = await instance.post(BACKEND_SIGN_IN_URL, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      const { data } = await instance.get(BACKEND_REFRESH_URL);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      await instance.post(BACKEND_LOGOUT_URL);
      token.clear();
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//------------ settings profile --------------------- //

export const updateProfileSettings = createAsyncThunk(
  'auth/updateProfileSettings',
  async (credentials, thunkAPI) => {
    // credentials = {
    //     name: 'string', required
    //     profileSettings: {
    //         height: number, required
    //         currentWeight: number, required
    //         desiredWeight: number ,required
    //         birthday: date, required
    //         blood: number, required
    //         sex: string, required
    //         levelActivity: number, required
    //     }
    // };
    try {
      token.set(tokenState(thunkAPI));
      const { data } = await instance.put(BACKEND_PROFILE_URL, credentials);
      toast.success('Profile settings successfully updated!', notifyOptions);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// password
export const emailResetUser = createAsyncThunk(
  'auth/emailResetUser',
  async (credentials, thunkAPI) => {
    // credentials: {
    //     email: string;
    // };
    try {
      const { data } = await instance.post(
        BACKEND_PASSWORD_EMAIL_URL,
        credentials
      );
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const passwordResetUser = createAsyncThunk(
  'auth/passwordResetUser',
  async ({ password, token }, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `${BACKEND_PASSWORD_EMAIL_URL}/${token}`,
        { password }
      );
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

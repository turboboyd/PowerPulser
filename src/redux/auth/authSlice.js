import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registrationUser,
  loginUser,
  logOutUser,
  refreshUser,
  verifyUser,
  updateProfileSettings,
  emailResetUser,
  passwordResetUser,
} from './authOperation';
import {
  handleFulfilledRegistration,
  handleFulfilledLogin,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handlePending,
  handleRejected,
  handleFulfilledVerify,
  handleVerifyRejected,
  handleFulfilledUpdateProfileSettings,
  handlePendingUpdateProfileSettings,
  handleRejectedUpdateProfileSettings,
  handlePendingRefresh,
  handleFulfilledResetEmail,
  handleFulfilledResetPassword,
} from './authReducer';
import { operationsType } from './authOperationsType';

import { uploadAvatar } from '../avatar/avatarOperations';

const contactsInitialState = {
  user: {
    email: '',
    name: '',
    registrDate: '',
    avatarURL: '',
    profileSettings: {
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: null,
      blood: null,
      levelActivity: null,
      sex: null,
      bmr: 0,
    },
  },
  status: null,
  token: '',
  isVerify: false,
  isAuthCheck: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: contactsInitialState,
  reducers: {
    setAvatarURL: (state, action) => {
      state.user.avatarURL = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationUser.fulfilled, handleFulfilledRegistration)
      .addCase(verifyUser.fulfilled, handleFulfilledVerify)
      .addCase(loginUser.fulfilled, handleFulfilledLogin)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(emailResetUser.fulfilled, handleFulfilledResetEmail)
      .addCase(passwordResetUser.fulfilled, handleFulfilledResetPassword)
      .addCase(
        updateProfileSettings.pending,
        handlePendingUpdateProfileSettings
      )
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(
        updateProfileSettings.fulfilled,
        handleFulfilledUpdateProfileSettings
      )
      .addCase(
        updateProfileSettings.rejected,
        handleRejectedUpdateProfileSettings
      )
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.avatarURL = action.payload;
      })
      .addCase(verifyUser.rejected, handleVerifyRejected)
      .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
      .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected);
  },
});

export const { setAvatarURL } = authSlice.actions;
export const authReducer = authSlice.reducer;

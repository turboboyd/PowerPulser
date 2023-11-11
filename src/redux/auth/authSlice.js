import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { registrationUser, loginUser, logOutUser, refreshUser, verifyUser, addProfileSettings, updateProfileSettings } from './authOperation';
import { handleFulfilledRegistration, handleFulfilledLogin, handleFulfilledLogOut, handleFulfilledRefresh, handlePending, handleRejected, handleFulfilledVerify, handleFulfilledProfileSettings } from './authReducer';
import { operationsType } from './authOperationsType';

const contactsInitialState = {
    user: {
        email: '',
        name: '',
        token: '',
        profileSettings: {
            height: '',
            currentWeight: '',
            desiredWeight: '',
            birthday: null,
            blood: null,
            levelActivity: null,
            sex: null,
        }
    },
    isVerify: false,
    isLoading: false,
    isRefreshing: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registrationUser.fulfilled, handleFulfilledRegistration)
            .addCase(verifyUser.fulfilled, handleFulfilledVerify)
            .addCase(loginUser.fulfilled, handleFulfilledLogin)
            .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
            .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
            .addCase(addProfileSettings.fulfilled, handleFulfilledProfileSettings)
            .addCase(updateProfileSettings.fulfilled, handleFulfilledProfileSettings)
            .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
            .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected)
    },
});

export const authReducer = authSlice.reducer
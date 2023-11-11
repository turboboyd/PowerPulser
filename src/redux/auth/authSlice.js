import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { registrationUser, loginUser, logOutUser, refreshUser } from 'redux/auth/authOperations';
import { handleFulfilledRegistration, handleFulfilledLogin, handleFulfilledLogOut, handleFulfilledRefresh, handlePending, handleRejected } from 'redux/auth/authReducer';
import { operationsType } from 'redux/auth/authOperationsType';

const contactsInitialState = {
    user: {
        email: '',
        name: '',
        token: null,
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: null,
        blood: null,
        levelActivity: null,
        sex: null,
    },
    isSuccesses: false,
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
            .addCase(loginUser.fulfilled, handleFulfilledLogin)
            .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
            .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
            .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
            .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected)
    },
});

export const authReducer = authSlice.reducer
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchExercisesFilter, fetchExercisesItemsSelectedFilter } from './exercisesOperations';
import { operationsType } from './exercisesOperationsType';
import { handleFulfilledFilter, handlePending, handleRejected } from './exercisesReducers';

const initialState = {
    exercisesFilter: [],
    itemsSelectedFilter: [],
    isLoading: false,
    error: null
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchExercisesFilter.fulfilled, handleFulfilledFilter)
            .addCase(fetchExercisesItemsSelectedFilter.fulfilled, handleFulfilledFilter)
            .addMatcher(isAnyOf(...operationsType("pending")), handlePending)
            .addMatcher(isAnyOf(...operationsType("rejected")), handleRejected);
    }
});

export const exercisesReducer = exercisesSlice.reducer
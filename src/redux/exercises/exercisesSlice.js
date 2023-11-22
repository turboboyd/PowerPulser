import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchExercisesFilter, fetchExercisesItemsSelectedFilter } from './exercisesOperations';
import { operationsType } from './exercisesOperationsType';
import { handleFulfilledFilter, handleFulfilledItemsSelectedFilter, handlePending, handleRejected } from './exercisesReducers';

const initialState = {
    exercisesFilter: [],
    itemsSelectedFilter: [],
    totalRecords: '',
    getMore: false,
    isLoading: false,
    error: null
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: initialState,
    reducers: {
        setItemsSelectedFilter: (state) => {
            state.itemsSelectedFilter = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExercisesFilter.fulfilled, handleFulfilledFilter)
            .addCase(fetchExercisesItemsSelectedFilter.fulfilled, handleFulfilledItemsSelectedFilter)
            .addMatcher(isAnyOf(...operationsType("pending")), handlePending)
            .addMatcher(isAnyOf(...operationsType("rejected")), handleRejected);
    }
});

export const exercisesReducer = exercisesSlice.reducer;
export const { setItemsSelectedFilter } = exercisesSlice.actions;

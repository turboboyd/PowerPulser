import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchExercisesFilter, fetchExercisesItemsSelectedFilter } from './exercisesOperations';
import { operationsType } from './exercisesOperationsType';
import { handleFulfilledFilter, handleFulfilledItemsSelectedFilter, handlePending, handleRejected } from './exercisesReducers';

const initialState = {
    exercisesFilter: [],
    itemsSelectedFilter: [],
    totalRecords: '',
    page: 1,
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
        setPage: (state, { payload }) => {
            state.page = payload;
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
export const { setItemsSelectedFilter, setPage } = exercisesSlice.actions;

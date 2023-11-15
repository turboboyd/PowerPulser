import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addExercisesDiary, addProductDiary, deleteExercisesDiary, deleteProductDiary, fetchAllDiary } from './diaryOperations';
import { operationsType } from './diaryOperationsType';
import { handleFulfilledAddExercises, handleFulfilledAddProduct, handleFulfilledAllDiary, handleFulfilledDeleteExercises, handleFulfilledDeleteProduct, handlePending, handleRejected } from './diaryReducers';


const initialState = {
    diaryProducts: [],
    diaryExercises: [],
    isLoading: false,
    error: null
};

const diarySlice = createSlice({
    name: 'diary',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDiary.fulfilled, handleFulfilledAllDiary)
            .addCase(addProductDiary.fulfilled, handleFulfilledAddProduct)
            .addCase(deleteProductDiary.fulfilled, handleFulfilledDeleteProduct)
            .addCase(addExercisesDiary.fulfilled, handleFulfilledAddExercises)
            .addCase(deleteExercisesDiary.fulfilled, handleFulfilledDeleteExercises)
            .addMatcher(isAnyOf(...operationsType("pending")), handlePending)
            .addMatcher(isAnyOf(...operationsType("rejected")), handleRejected);
    }
});

export const diaryReducer = diarySlice.reducer
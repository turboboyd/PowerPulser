import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsCategory } from './productsOperations';
import { handleFulfilled, handleFulfilledCategory, handlePending, handleRejected } from './productsReducers';

const initialState = {
    items: [],
    category: [],
    isLoading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filters = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, handlePending)
            .addCase(fetchProductsCategory.pending, handlePending)
            .addCase(fetchProducts.rejected, handleRejected)
            .addCase(fetchProductsCategory.rejected, handleRejected)
            .addCase(fetchProducts.fulfilled, handleFulfilled)
            .addCase(fetchProductsCategory.fulfilled, handleFulfilledCategory)
    }
});

export const productsReducer = productsSlice.reducer
export const { setFilter } = productsSlice.actions;
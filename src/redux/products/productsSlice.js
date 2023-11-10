import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsOperations';
import { handleFulfilled, handlePending, handleRejected } from './productsReducers';

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    extraReducers: {
        [fetchProducts.pending]: handlePending,
        [fetchProducts.rejected]: handleRejected,
        [fetchProducts.fulfilled]: handleFulfilled,
    }
});

export default productsSlice.reducer
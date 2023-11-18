import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsOperations';
import { handleFulfilled, handlePending, handleRejected } from './productsReducers';

const initialState = {
    items: [],
    // filters: {
    //     search: "",
    //     category: "",
    //     recommended: "",
    // },
    getMore: false,
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
            .addCase(fetchProducts.rejected, handleRejected)
            .addCase(fetchProducts.fulfilled, handleFulfilled)
    }
});

export const productsReducer = productsSlice.reducer
export const { setFilter } = productsSlice.actions;
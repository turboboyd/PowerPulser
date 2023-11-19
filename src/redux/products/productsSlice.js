import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsCategory } from './productsOperations';
import { handleFulfilled, handleFulfilledCategory, handlePending, handleRejected } from './productsReducers';

const initialState = {
    items: [],
    category: [],
    filters: {
        page: 1,
        search: "",
        category: "",
        recommended: "",
    },
    getMore: false,
    isLoading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setItems: (state) => {
            state.items = [];
        },
        setFilters: (state, { payload }) => {
            state.filters = {...state.filters, ...payload};
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
export const { setItems, setFilters } = productsSlice.actions;
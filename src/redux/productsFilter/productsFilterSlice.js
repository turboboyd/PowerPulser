import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      search: "",
      category: "",
      recommended: "",
};

const productsFilterSlice = createSlice({
    name: 'productsFilter',
    initialState: initialState,
    reducers: {
        setFilter(state, { payload }) {
            state = payload
        },
    }
});

export const productsFilterReducer = productsFilterSlice.reducer
export const productsFilterAction = productsFilterSlice.actions.setFilter
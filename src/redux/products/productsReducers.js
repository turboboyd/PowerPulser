export const handlePending = (state) => {
    state.getMore = false;
    state.isLoading = true;
    state.error = null;
};
export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};
export const handleFulfilled = (state, { payload }) => {
    state.getMore = payload.length > 0;
    state.items.push(...payload);
    state.isLoading = false;
    state.error = null;
};
export const handleFulfilledCategory = (state, { payload }) => {
    state.category = payload;
    state.isLoading = false;
    state.error = null;
};

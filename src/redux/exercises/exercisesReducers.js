export const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};
export const handleFulfilledFilter = (state, { payload }) => {
    state.exercisesFilter = payload;
    state.isLoading = false;
    state.error = null;
};
export const handleFulfilledItemsSelectedFilter = (state, { payload }) => {
    state.itemsSelectedFilter.push(...payload);
    state.getMore = payload.length > 0
    state.isLoading = false;
    state.error = null;
};
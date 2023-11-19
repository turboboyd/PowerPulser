export const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};
export const handleFulfilledAllDiary = (state, { payload }) => {
    state.error = null;
    state.isLoadingDiary = false;
    state.diaryProducts = payload.products;
    state.diaryExercises = payload.exercises;
};
export const handleFulfilledAddProduct = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    state.diaryProducts.push(payload);
};
export const handleFulfilledDeleteProduct = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    const index = state.diaryProducts.findIndex(product => product._id === payload._id);
    if (index !== -1) {
        state.diaryProducts.splice(index, 1);
    }
};
export const handleFulfilledAddExercises = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    state.diaryExercises.push(payload);
};
export const handleFulfilledDeleteExercises = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    const index = state.diaryExercises.findIndex(exercises => exercises._id === payload._id);
    if (index !== -1) {
        state.diaryExercises.splice(index, 1);
    }
};
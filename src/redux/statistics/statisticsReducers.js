export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
  state.statistics = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

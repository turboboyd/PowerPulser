export const handlePending = (state) => {
    state.isLoading = true;
    state.isRefreshing = true;
};
export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.isRefreshing = false;
};

export const handleFulfilledRegistration = (state, { payload }) => {
    state.error = null;
    state.user = payload.user;
    state.isSuccesses = true;
    state.isLoading = false;
    // state.token = payload.user.token
    state.isRefreshing = false;
};
export const handleFulfilledLogin = (state, { payload }) => {
   
    state.error = null;
    state.user = payload.user;
    state.isSuccesses = true;
    state.isLoading = false;
    // state.token = payload.token;
    state.isRefreshing = false
};
export const handleFulfilledLogOut = (state) => {
    state.error = null;
    state.user = null;
    state.isSuccesses = false;
    state.isLoading = false;
    state.user.token = null;
    state.isRefreshing = false
};

export const handleFulfilledRefresh = (state, { payload }) => {
    state.user = payload;
    state.isSuccesses = true;
    state.isLoading = false;
    state.isRefreshing = false;
};
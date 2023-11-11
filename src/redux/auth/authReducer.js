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
    state.isLoading = false;
    state.isRefreshing = false;
};
export const handleFulfilledVerify = (state) => {
    state.isVerify = true;
};
export const handleFulfilledLogin = (state, { payload }) => { 
    state.error = null;
    state.user = payload.user;
    state.isLoading = false;
    state.isRefreshing = false
};
export const handleFulfilledLogOut = (state) => {
    state.error = null;
    state.user = null;
    state.isVerify = false;
    state.isLoading = false;
    state.user.token = null;
    state.isRefreshing = false
};

export const handleFulfilledRefresh = (state, { payload }) => {
    state.user = payload.user;
    state.isVerify = true;
    state.isLoading = false;
    state.isRefreshing = false;
};

export const handleFulfilledProfileSettings = (state, { payload }) => {
    state.user.profileSettings = payload;
    state.isLoading = false;
};
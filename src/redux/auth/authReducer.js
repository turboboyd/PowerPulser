export const handlePending = state => {
  state.isLoading = true;
};

export const handlePendingRefresh = state => {
  state.isLoading = true;
  state.isRefreshing = true;
  state.status = 'pending';
};
export const handlePendingUpdateProfileSettings = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejectedUpdateProfileSettings = (state, { payload }) => {
  state.isLoading = false;
  state.isAuthCheck = true;
  state.error = payload;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
  state.isAuthCheck = true;
};

export const handleFulfilledRegistration = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isAuthCheck = true;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.token = payload.token;
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isAuthCheck = true;
};
export const handleFulfilledLogOut = state => {
  state.user = null;
  state.token = null;
  state.isVerify = false;
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
  state.isAuthCheck = true;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isAuthCheck = true;
  state.status = 'fulfilled';
};

export const handleFulfilledVerify = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.status = 'fulfilled';
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
  state.isAuthCheck = true;
};

export const handleVerifyRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.status = 'rejected';
};

export const handleFulfilledUpdateProfileSettings = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.error = null;
  state.isAuthCheck = true;
};

// password

export const handleFulfilledResetEmail = state => {
  state.status = 'fulfilled';
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
  state.isAuthCheck = true;
};

export const handleFulfilledResetPassword = state => {
  state.status = 'fulfilled';
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
  state.isAuthCheck = true;
};

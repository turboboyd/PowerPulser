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
  state.token = payload.token;
  state.isLoading = false;
  state.isRefreshing = false;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.token = payload.token;
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
};
export const handleFulfilledLogOut = (state) => {
  state.user = null;
  state.token = null;
  state.isVerify = false;
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
};

export const handleFulfilledProfileSettings = (state, { payload }) => {
  state.user.profileSettings = payload;
  state.isLoading = false;
  state.error = null;
};

// 

export const handleFulfilledVerify = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.status = "fulfilled";
  state.isVerify = true;
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = null;
};

export const handleVerifyRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.status = "rejected";
};
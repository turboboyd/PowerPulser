import {
  loginUser,
  logOutUser,
  refreshUser,
  registrationUser,
  resendVerifyUser,
  emailResetUser,
} from './authOperation';

const operationsThunk = [
  registrationUser,
  loginUser,
  logOutUser,
  refreshUser,
  resendVerifyUser,
  emailResetUser,
];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
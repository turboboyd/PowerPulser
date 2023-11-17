import { loginUser, logOutUser, refreshUser, registrationUser, resendVerifyUser, } from "./authOperation";

const operationsThunk = [registrationUser, loginUser, logOutUser, refreshUser, resendVerifyUser ];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
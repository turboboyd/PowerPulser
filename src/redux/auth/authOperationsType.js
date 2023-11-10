import { loginUser, logOutUser, refreshUser, registrationUser } from "redux/auth/operation";

const operationsThunk = [registrationUser, loginUser, logOutUser, refreshUser];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
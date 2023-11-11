import { loginUser, logOutUser, refreshUser, registrationUser, verifyUser } from "./authOperation";

const operationsThunk = [registrationUser, loginUser, logOutUser, verifyUser, refreshUser];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
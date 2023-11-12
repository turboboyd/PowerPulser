import { addProfileSettings, loginUser, logOutUser, refreshUser, registrationUser, resendVerifyUser, updateProfileSettings, verifyUser } from "./authOperation";

const operationsThunk = [registrationUser, loginUser, logOutUser, verifyUser, refreshUser, resendVerifyUser, addProfileSettings, updateProfileSettings];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
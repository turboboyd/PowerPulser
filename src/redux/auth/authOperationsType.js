import { addProfileSettings, loginUser, logOutUser, refreshUser, registrationUser, resendVerifyUser, updateProfileSettings, } from "./authOperation";

const operationsThunk = [registrationUser, loginUser, logOutUser, refreshUser, resendVerifyUser, addProfileSettings, updateProfileSettings];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);
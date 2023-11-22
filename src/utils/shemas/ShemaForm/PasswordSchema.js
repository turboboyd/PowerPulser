import * as Yup from 'yup';
import {passwordRegex } from './Regex';


export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(passwordRegex, 'Must contain at least 1 capital and 1 digit'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


export default PasswordSchema;

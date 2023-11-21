import * as Yup from 'yup';
import {passwordRegex } from './Regex';

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(passwordRegex, 'Must contain at least 1 capital and 1 digit')
    .required('Required field'),
});

export default PasswordSchema;

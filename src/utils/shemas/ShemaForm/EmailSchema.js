import * as Yup from 'yup';
import { emailRegex } from './Regex';

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Invalid email format')
    .required('Required field'),
});

export default EmailSchema;

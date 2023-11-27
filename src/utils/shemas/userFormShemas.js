import * as yup from 'yup';

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const userFormShemas = yup.object({
  name: yup.string().matches(/^\S.*\S$/, "Leading and trailing spaces are not allowed").required('Name is required'),
  height: yup
    .number('Number')
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(150, 'Height must be at least 150cm')
    .max(250, 'Height must be at most 250cm')
    .required('Height is required'),
  currentWeight: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(35, 'Current weight must be at least 35kg')
    .max(200, 'Current weight must be at most 200kg')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(35, 'Desired weight must be at least 35kg')
    .max(200, 'Desired weight must be at most 200kg')
    .required('Desired weight is required'),
  birthday: yup
    .date()
    .max(eighteenYearsAgo, 'Birthday must be in the past')
    .min(new Date('1900-01-01'), 'Birthday must be after 1900-01-01')
    .required('Birthday is required'),
});

export default userFormShemas;

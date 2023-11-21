import * as yup from "yup";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const userFormShemas = yup.object({
  name: yup.string().required('Name is required'),
  height: yup
    .number('Number')
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(150, 'Height must be at least 150cm')
    .required('Height is required'),
  currentWeight: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(35, 'Current weight must be at least 35kg')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be positive.')
    .min(35, 'Desired weight must be at least 35kg')
    .required('Desired weight is required'),
  birthday: yup
    .date()
    .max(eighteenYearsAgo, 'Birthday must be in the past')
    .min(new Date('1900-01-01'), 'Birthday must be after 1900-01-01')
    .required('Birthday is required'),
});

export default userFormShemas;

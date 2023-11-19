import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Logo from '../../components/Logo/Logo';
import css from './NewPassword.module.css';
import TitlePage from '../../components/TitlePage/TitlePage';
import Icon from '../../components/ComponIcon/Icon';
import Button from '../Button/Button';
import { loginUser } from '../../redux/auth/authOperation';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const NewPassword = () => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

 const handleSubmit = async (values) => {
   const { email } = values;

   try {
     await dispatch(loginUser({ email }));

     setSuccessMessage('We sent you a link to your email. Please follow it.');
   } catch (error) {}
 };

  return (
    <>
      <Logo />
      <TitlePage title="Forget Password" className={css.title} />
      <Icon className={css.iconWarning} iconId={'icon-warning'} />
      <p className={css.warningText}>
        Enter your email address below, and we'll send you a link to reset your
        password. Check your email shortly for further instructions
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.buttonWrapper}>
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorText}
          />
          <Button type="submit" text="Send on email" />
        </Form>
      </Formik>
      {successMessage && (
        <div className={css.successMessage}>{successMessage}</div>
      )}
    </>
  );
};

export default NewPassword;

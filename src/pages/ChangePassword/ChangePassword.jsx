import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { SIGN_UP_ROUTE } from '../../utils/const'; 
import useAuth from '../../hooks/useAuth';

import Logo from '../../components/Logo/Logo';
import css from './ChangePassword.module.css'; 
import Icon from '../../components/ComponIcon/Icon';
import Button from '../../components/Button/Button';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  repeatEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Required'),
});

const ChangePassword = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isVerify, user } = useAuth();

    //  const handleSubmit = ({ email }, { resetForm }) => {
    //    dispatch(loginUser({ email }));
    //    resetForm();
    //  };
    
    
    // useEffect(() => {
    //   if (isVerify) {
    //     setSuccessMessage(
    //       'We sent you a link to your email. Please follow it to reset your password.'
    //       );
    //   }
    //   if (!isVerify && user.profile_settings) {
    //     setSuccessMessage(
    //         'We sent you a link to your email. Please follow it to reset your password.'
    //     );
    //   }
    // }, [isVerify, navigate, user.profile_settings]);
    


  const handleSubmit = async ({ email }) => {

    try {
      const response = await fetch('RESET_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage(
          'We sent you a link to your email. Please follow it to reset your password.'
        );
      } else {
        console.error(
          'Failed to initiate password reset:',
          response.statusText
        );
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <Logo />
      <h1 className={css.title}>Password Reset</h1>
      <Icon className={css.iconWarning} iconId={'icon-warning'} />
      <p className={css.text}>
        Enter your email address below, and we'll send you a link to reset your
        password. 
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.inputWrapper}>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.field}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorText}
          />

          <Button type="submit" text="Send email" className={css.button} />
        </Form>
      </Formik>
      {successMessage && (
        <div className={css.successMessage}>{successMessage}</div>
      )}
    </>
  );
};

export default ChangePassword;

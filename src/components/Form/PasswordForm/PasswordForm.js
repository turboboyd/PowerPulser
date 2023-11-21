import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import css from './PasswordForm.module.css';
import Button from '../../Button/Button';
import Icon from '../../ComponIcon/Icon';
import renderFormField from '../FormField/renderFormField';
import { loginUser, registrationUser } from '../../../redux/auth/authOperation';
import { SignUpSchema, SignInSchema } from '../../../utils/shemas';
import useAuth from '../../../hooks/useAuth';
import { DIARY_ROUTE, PROFILE_ROUTE } from '../../../utils/const';
import useShowPassword from '../../../hooks/useShowPassword';

const initialValuesSignUp = {
  name: '',
  email: '',
  password: '',
};

const initialValuesSignIn = {
  email: '',
  password: '',
};

const PasswordForm = ({ resetPassword, title, textBtn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showPassword, handleClick } = useShowPassword();

  const { isVerify, user } = useAuth();

  const handleSubmitEmail = ({ email }, { resetForm }) => {
    dispatch(registrationUser({ email }));
    resetForm();
  };

  const handleSubmitPassword = ({ email, password }, { resetForm }) => {
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const formikRef = useRef();
  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
    if (isVerify && !user.profileSettings) {
      navigate(PROFILE_ROUTE);
    }
    if (isVerify && user.profileSettings) {
      navigate(DIARY_ROUTE);
    }
  }, [resetPassword, isVerify, navigate, user]);

  const initialValues = resetPassword
    ? initialValuesSignUp
    : initialValuesSignIn;
  const validationSchema = resetPassword ? SignUpSchema : SignInSchema;
  const handleSubmit = resetPassword ? handleSubmitEmail : handleSubmitPassword;

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {formik => (
          <Form className={css.form}>
            <div className={css.formWrapper}>
              {resetPassword &&
                renderFormField(
                  'email',
                  'email',
                  'Email',
                  formik,
                  'Success email'
                )}
              {!resetPassword && (
                <div style={{ position: 'relative' }}>
                  {renderFormField(
                    'password',
                    showPassword ? 'text' : 'password',
                    'Password',
                    formik,
                    'Success password',
                    true
                  )}
                  <button
                    className={css.buttonEye}
                    type="button"
                    onClick={handleClick}
                  >
                    <Icon
                      className={css.svgEye}
                      iconId={showPassword ? 'icon-eye' : 'icon-eye-off'}
                    />
                  </button>
                </div>
              )}
              {!resetPassword && (
                <div style={{ position: 'relative' }}>
                  {renderFormField(
                    'password',
                    showPassword ? 'text' : 'password',
                    'Password',
                    formik,
                    'Success password',
                    true
                  )}
                  <button
                    className={css.buttonEye}
                    type="button"
                    onClick={handleClick}
                  >
                    <Icon
                      className={css.svgEye}
                      iconId={showPassword ? 'icon-eye' : 'icon-eye-off'}
                    />
                  </button>
                </div>
              )}
            </div>
            <Button text={textBtn} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PasswordForm;

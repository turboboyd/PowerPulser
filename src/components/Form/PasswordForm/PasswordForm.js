import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import css from './PasswordForm.module.css';
import Button from '../../Button/Button';
import Icon from '../../ComponIcon/Icon';
import renderFormField from '../FormField/renderFormField';
import {
  emailResetUser,
  passwordResetUser,
} from '../../../redux/auth/authOperation';

import useAuth from '../../../hooks/useAuth';
import { DIARY_ROUTE, PROFILE_ROUTE } from '../../../utils/const';
import useShowPassword from '../../../hooks/useShowPassword';
import PropTypes from 'prop-types';
import { EmailSchema, PasswordSchema } from 'utils/shemas';


const initialValuesEmail = {
  email: '',
};

const initialValuesPassword = {
  password: '',
};

const PasswordForm = ({ resetPassword, textBtn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { showPassword, handleClick } = useShowPassword();

  const { isVerify, user } = useAuth();

  const handleSubmitEmail = ({ email }, { resetForm }) => {
    dispatch(emailResetUser({ email }));
    resetForm();
  };

  const handleSubmitPassword = ({ password }, { resetForm }) => {
    dispatch(passwordResetUser({ password, token: id }));
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
    ? initialValuesEmail
    : initialValuesPassword;
  const validationSchema = resetPassword ? EmailSchema : PasswordSchema;
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

PasswordForm.propTypes = {
  resetPassword: PropTypes.bool,
  textBtn: PropTypes.string,
};
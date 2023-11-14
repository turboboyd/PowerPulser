import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./SignUpForm.module.css";
import Button from "../../Button/Button";
import Icon from "../../ComponIcon/Icon";
import FormField from "../FormField/FormField";
import { loginUser, registrationUser } from "../../../redux/auth/authOperation";
import { SignUpSchema, SignInSchema } from "../../../utils/shemas";
import { useAuth } from "../../../hooks/useAuth";
import { DIARY_ROUTE, PROFILE_ROUTE } from "../../../utils/const";

const initialValuesSignUp = {
  name: "",
  email: "",
  password: "",
};

const initialValuesSignIn = {
  email: "",
  password: "",
};

const SignUpForm = ({ isSignUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { isVerify, user } = useAuth();

  const handleSubmitSignUp = ({ name, email, password }, { resetForm }) => {
    dispatch(registrationUser({ name, email, password }));
    resetForm();
  };

  const handleSubmitSignIn = ({ email, password }, { resetForm }) => {
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const handleClick = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const formikRef = useRef();
  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
    if (isVerify && !user.profile_settings) {
      navigate(PROFILE_ROUTE);
    }
    if (isVerify && user.profile_settings) {
      navigate(DIARY_ROUTE);
    }
  }, [isSignUp, isVerify, navigate, user.profile_settings]);

  const initialValues = isSignUp ? initialValuesSignUp : initialValuesSignIn;
  const validationSchema = isSignUp ? SignUpSchema : SignInSchema;
  const handleSubmit = isSignUp ? handleSubmitSignUp : handleSubmitSignIn;
  const buttonText = isSignUp ? "Sign In" : "Sign Up";
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {(formik) => (
          <Form className={css.form}>
            <div className={css.formWrapper}>
              {isSignUp && (
                <FormField
                  fieldName="name"
                  fieldType="text"
                  placeholder="Name"
                  formik={formik}
                  successMessage="Success name"
                />
              )}
              <FormField
                fieldName="email"
                fieldType="email"
                placeholder="Email"
                formik={formik}
                successMessage="Success email"
              />
              <div style={{ position: "relative" }}>
                <FormField
                  fieldName="password"
                  fieldType={showPassword ? "text" : "password"}
                  placeholder="Password"
                  formik={formik}
                  successMessage="Success password"
                  isPassword
                />
                <button
                  className={css.buttonEye}
                  type="button"
                  onClick={handleClick}
                >
                  <Icon
                    className={css.svgEye}
                    iconId={showPassword ? "icon-eye" : "icon-eye-off"}
                  />
                </button>
              </div>
            </div>
            <Button type="submit" text={buttonText} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

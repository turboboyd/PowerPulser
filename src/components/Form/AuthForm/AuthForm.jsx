import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./AuthForm.module.css";
import Button from "../../Button/Button";
import Icon from "../../ComponIcon/Icon";
import renderFormField from "../FormField/renderFormField";
import { loginUser, registrationUser } from "../../../redux/auth/authOperation";
import { SignUpSchema, SignInSchema } from "../../../utils/shemas";
import { useAuth } from "../../../hooks/useAuth";
import { DIARY_ROUTE, PROFILE_ROUTE } from "../../../utils/const";
import useShowPassword from "../../../utils/userShowPassword";

const initialValuesSignUp = {
  name: "",
  email: "",
  password: "",
};

const initialValuesSignIn = {
  email: "",
  password: "",
};

const AuthForm = ({ isSignUp, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showPassword, handleClick } = useShowPassword();

  const { isVerify, user } = useAuth();

  const handleSubmitSignUp = ({ name, email, password }, { resetForm }) => {
    dispatch(registrationUser({ name, email, password }));
    resetForm();
  };

  const handleSubmitSignIn = ({ email, password }, { resetForm }) => {
    dispatch(loginUser({ email, password }));
    resetForm();
  };

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
  }, [isSignUp, isVerify, navigate, user]);

  const initialValues = isSignUp ? initialValuesSignUp : initialValuesSignIn;
  const validationSchema = isSignUp ? SignUpSchema : SignInSchema;
  const handleSubmit = isSignUp ? handleSubmitSignUp : handleSubmitSignIn;

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
              {isSignUp &&
                renderFormField("name", "text", "Name", formik, "Success name")}
              {renderFormField(
                "email",
                "email",
                "Email",
                formik,
                "Success email"
              )}
              <div style={{ position: "relative" }}>
                {renderFormField(
                  "password",
                  showPassword ? "text" : "password",
                  "Password",
                  formik,
                  "Success password",
                  true
                )}
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
            <Button text={title} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;

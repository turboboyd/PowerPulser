import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import css from "./SignUpForm.module.css";
import Button from "../Button/Button";
import Icon from "../ComponIcon/Icon";
import FormField from "../Form/FormField/FormField";
import { registrationUser } from "../../redux/auth/authOperation";
import { SignInSchema, SignUpSchema } from "../../utils/shemas";
import { useAuth } from "../../hooks/useAuth";


const initialValues = {
  name: "",
  email: "",
  password: "",
};



const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isVerify, user } = useAuth();
  console.log('isVerify: ', isVerify);
  console.log('user: ', user);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(registrationUser({ name, email, password }));
    resetForm();
  };

  const handleClick = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={css.form} autoComplete="off">
            <div className={css.formWrapper}>
              <FormField
                fieldName="name"
                fieldType="text"
                placeholder="Name"
                formik={formik}
                successMessage="Success name"
              />
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
            <Button type="button" text="Sign Up" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

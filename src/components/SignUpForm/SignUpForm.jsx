import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import css from "./SignUpForm.module.css";

import Button from "../Button/Button";

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required field"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Required field"),
  password: Yup.string()
    .matches(passwordRegex, "Must contain at least 1 capital and 1 digit")
    .required("Required field"),
});

const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Formik validationSchema={SignUpSchema} onSubmit={handleSubmit}>
        {(formik) => (
          <Form className={css.form} autoComplete="off">
            <div className={css.formWrapper}>
              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>

              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <Button type="submit" text="Sign Up" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

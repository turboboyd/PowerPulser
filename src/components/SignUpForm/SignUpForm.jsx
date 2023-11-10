import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import css from "./SignUpForm.module.css";
import sprite from "../../images/svg/sprite.svg";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={css.form} autoComplete="off">
            <div className={css.formWrapper}>
              <div
                className={`${css.fieldWrapper} ${
                  formik.touched.name && formik.errors.name
                    ? `${css.error}`
                    : formik.touched.name && !formik.errors.name
                    ? `${css.success}`
                    : ""
                }`}
              >
                <Field
                  className={css.field}
                  type="text"
                  name="name"
                  placeholder="Name"
                />

                <div className={css.messageWrapper}>
                  <svg data-status="error" className={css.svgError}>
                    <use href={`${sprite}#icon-red`} />
                  </svg>

                  <ErrorMessage
                    className={css.errorMessage}
                    name="name"
                    component="div"
                  />
                </div>

                {formik.touched.name && !formik.errors.name && (
                  <div className={css.messageWrapper}>
                    <svg className={css.svgSuccess}>
                      <use href={`${sprite}#icon-green`} />
                    </svg>
                    <div className={css.successMessage}>Success name</div>
                  </div>
                )}
              </div>

              <div
                className={`${css.fieldWrapper} ${
                  formik.touched.email && formik.errors.email
                    ? `${css.error}`
                    : formik.touched.email && !formik.errors.email
                    ? `${css.success}`
                    : ""
                }`}
              >
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <div className={css.messageWrapper}>
                  <svg data-status="error" className={css.svgError}>
                    <use href={`${sprite}#icon-red`} />
                  </svg>

                  <ErrorMessage
                    className={css.errorMessage}
                    name="email"
                    component="div"
                  />
                </div>

                {formik.touched.email && !formik.errors.email && (
                  <div className={css.messageWrapper}>
                    <svg data-status="success" className={css.svgSuccess}>
                      <use href={`${sprite}#icon-green`} />
                    </svg>
                    <div className={css.successMessage}>Success email</div>
                  </div>
                )}
              </div>

              <div
                className={`${css.fieldWrapper} ${
                  formik.touched.password && formik.errors.password
                    ? `${css.error}`
                    : formik.touched.password && !formik.errors.password
                    ? `${css.success}`
                    : ""
                }`}
              >
                <Field
                  className={css.field}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />

                <div className={css.messageWrapper}>
                  <svg data-status="error" className={css.svgError}>
                    <use href={`${sprite}#icon-red`} />
                  </svg>

                  <ErrorMessage
                    className={css.errorMessage}
                    name="password"
                    component="div"
                  />
                </div>

                {formik.touched.password && !formik.errors.password && (
                  <div className={css.messageWrapper}>
                    <svg data-status="success" className={css.svgSuccess}>
                      <use href={`${sprite}#icon-green`} />
                    </svg>
                    <div className={css.successMessage}>Success password</div>
                  </div>
                )}
                <button
                  className={css.buttonEye}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className={css.svgEye}>
                      <use href={`${sprite}#icon-eye`} />
                    </svg>
                  ) : (
                    <svg className={css.svgEye}>
                      <use href={`${sprite}#icon-eye-off`} />
                    </svg>
                  )}
                </button>
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

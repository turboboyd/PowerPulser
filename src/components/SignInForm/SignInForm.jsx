import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SignInSchema, SignUpSchema } from "../../utils/shemas";
import { useState } from "react";

import css from "../SignUpForm/SignUpForm.module.css";
import Button from "../Button/Button";

import { loginUser } from "../../redux/auth/authOperation";
import Icon from "../ComponIcon/Icon";
import { useAuth } from "../../hooks/useAuth";
import { DIARY_ROUTE, PROFILE_ROUTE } from "../../utils/const";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { isVerify, user } = useAuth();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  useEffect(() => {
    if (isVerify && !user.profile_settings) {
      navigate(PROFILE_ROUTE);
    }
    if (isVerify && user.profile_settings) {
      navigate(DIARY_ROUTE);
    }
  }, [isVerify, navigate, user.profile_settings]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={css.form}>
            <div className={css.formWrapper}>
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
                  <Icon
                    data-status="error"
                    className={css.svgError}
                    iconId={"icon-red"}
                  />

                  <ErrorMessage
                    className={css.errorMessage}
                    name="email"
                    component="div"
                  />
                </div>

                {formik.touched.email && !formik.errors.email && (
                  <div className={css.messageWrapper}>
                    <Icon
                      data-status="success"
                      className={css.svgSuccess}
                      iconId={"icon-green"}
                    />
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
                  <Icon
                    data-status="error"
                    className={css.svgError}
                    iconId={"icon-red"}
                  />

                  <ErrorMessage
                    className={css.errorMessage}
                    name="password"
                    component="div"
                  />
                </div>

                {formik.touched.password && !formik.errors.password && (
                  <div className={css.messageWrapper}>
                    {/* <svg data-status="success" className={css.svgSuccess}>
                      <use href={`${sprite}#icon-green`} />
                    </svg> */}
                    <Icon
                      data-status="success"
                      className={css.svgSuccess}
                      iconId={"icon-green"}
                    />
                    <div className={css.successMessage}>Success password</div>
                  </div>
                )}
                <button
                  className={css.buttonEye}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Icon className={css.svgEye} iconId={"icon-eye"} />
                  ) : (
                    <Icon className={css.svgEye} iconId={"icon-eye-off"} />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" text="Sign In" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;

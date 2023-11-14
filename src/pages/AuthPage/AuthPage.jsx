import { Link } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import css from "./AuthPage.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const SignUpPage = () => {


  const AuthPage =
    " Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.";
  return (
    <>
      <h2 className={css.title}>Sign Up</h2>
      <p className={css.text}>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <SignUpForm />
      <div className={css.textWrapper}>
        <p className={css.textHint}>Already have account?</p>
        <Link className={css.link} to="/signin">
          Sign In
        </Link>
      </div>
      <BackgroundImage/>
    </>
  );
};

export default AuthPage;



import { Link } from "react-router-dom";

import SignInForm from "../../components/SignInForm/SignInForm";
import css from "../SignUpPage/SignUpPage.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const SignInPage = () => {
  return (
    <>
      <h2 className={css.title}>Sign In</h2>
      <p className={css.text}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <SignInForm />
      <div className={css.textWrapper}>
        <p className={css.textHint}>Don’t have an account?</p>
        <Link className={css.link} to="/signup">
          Sign Up
        </Link>
      </div>
      <BackgroundImage/>
    </>
  );
};

export default SignInPage;

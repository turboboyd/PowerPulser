import { Link, useLocation } from "react-router-dom";
import css from "./AuthPage.module.css";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../../utils/const";
import AuthForm from "../../components/Form/AuthForm/AuthForm";
import Logo from "../../components/Logo/Logo";

const AuthPage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === SIGN_UP_ROUTE;
  const title = isLoginPage ? "Sign Up" : "Sign In";
  const titleLink = !isLoginPage ? "Sign Up" : "Sign In";
  const link = !isLoginPage ? SIGN_UP_ROUTE : SIGN_IN_ROUTE;
  const text = !isLoginPage
    ? "Welcome! Please enter your credentials to login to the platform:"
    : " Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.";

  return (
    <>
      <Logo />
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
      <AuthForm isSignUp={isLoginPage} title={title} />
      <div className={css.textWrapper}>
        <p className={css.textHint}>Don’t have an account?</p>
        <Link className={css.link} to={link}>
          {titleLink}
        </Link>
      </div>
    </>
  );
};

export default AuthPage;

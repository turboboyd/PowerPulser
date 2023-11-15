import { Link } from "react-router-dom";

import SignInForm from "../../components/SignInForm/SignInForm";
import css from "../SignUpPage/SignUpPage.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import ButtonInfo from "../../components/ButtonInfo/ButtonInfo";
import sprite from '../../images/svg/InlineSprite.svg';


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
      <div className={css.polygon}>
        <ButtonInfo
          type="button"
          buttonClassName={css.buttonPlay}
          iconClassName={css.iconPlay}
          text={
            <div className={css.textPlay}>
              <span className={css.boldTextPlay}>350+</span>{' '}
              <span className={css.smallTextPlay}>Video Tutorial</span>
            </div>
          }
          sprite={sprite}
          iconId="Polygon"
        />
      </div>
      <div className={css.runner}>
        <ButtonInfo
          type="button"
          buttonClassName={css.calButton}
          iconClassName={css.calIcon}
          text={
            <div className={css.textSvg}>
              <span className={css.boldText}>500</span>{' '}
              <span className={css.smallText}>cal</span>
            </div>
          }
          sprite={sprite}
          iconId="Runner"
        />
      </div>
      <BackgroundImage />
    </>
  );
};

export default SignInPage;

import { Link } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import css from "./SignUpPage.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import sprite from '../../images/svg/InlineSprite.svg';
import ButtonInfo from '../../components/ButtonInfo/ButtonInfo';



const SignUpPage = () => {
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

export default SignUpPage;

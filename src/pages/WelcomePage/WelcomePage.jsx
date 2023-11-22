import { Link } from "react-router-dom";
import css from "./WelcomPage.module.css";
import Icon from "../../components/ComponIcon/Icon";
import Logo from "../../components/Logo/Logo";


const WelcomePage = () => {
  return (
    <>
      <Logo />
      <h1 className={css.title}>
        Transforming your <span className={css.bodyText}>body</span> shape with
        Power Pulse
      </h1>
      <div className={css.icon}>
        <Icon className={css.exerciseArrowSvg} iconId="icon-line" />
      </div>
      <div className={css.buttonWrapper}>
        <Link className={css.linkSignUp} to="/signup">
          <span className={css.textButton}>Sign Up</span>
        </Link>
        <Link to="/signin" className={css.linkSignIn}>
          <span className={css.textButton}> Sign In</span>
        </Link>
      </div>
    </>
  );
};

export default WelcomePage;

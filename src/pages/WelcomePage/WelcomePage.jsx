import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./WelcomPage.module.css";
import Icon from "../../components/ComponIcon/Icon";
import Logo from "../../components/Logo/Logo";

const WelcomePage = () => {
  return (
      <Container>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyText}>body</span> shape
          with Power Pulse
        </h1>
        <div className={css.icon}>
          <Icon className={css.exerciseArrowSvg} iconId="icon-line" />
        </div>
        <div className={css.buttonWrapper}>
          <Link className={css.link} to="/signup">
            <Button type="submit" className={css.buttonSignUp} text="Sign Up" />
          </Link>
          <Link to="/signin">
            <Button type="submit" className={css.buttonSignIn} text="Sign In" />
          </Link>
        </div>

        <StatisticsInfo />
        <BackgroundImage />
      </Container>
  );
};

export default WelcomePage;

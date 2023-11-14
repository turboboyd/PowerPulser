import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import ButtonInfo from "../../components/ButtonInfo/ButtonInfo";
import Logo from "../../components/Logo/Logo";
import sprite from "../../images/svg/InlineSprite.svg"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import css from "./WelcomPage.module.css";
import Container from "../../components/Container/Container";
import Icon from "../../components/ComponIcon/Icon";


const WelcomePage = () => {
  return (
    <Container>
      <div className={css.logo}>
        <Logo />{' '}
      </div>
      <div className={css.wrapper}>
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
            iconId="Polygon" //
          />
        </div>

        <ButtonInfo
          className={css.buttonA}
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
          iconId="Runner" // Replace with the actual ID from your sprite
        />
      </div>
      <BackgroundImage />
    </Container>
  );
};

export default WelcomePage;

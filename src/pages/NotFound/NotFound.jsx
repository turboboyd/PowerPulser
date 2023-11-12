import { WELCOME_PAGE_ROUTE } from "../../utils/const";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import sprite from "../../images/svg/InlineSprite.svg";
import css from "./NotFound.module.css";
// import Container from "../../components/Container/Container";
// import Logo from "../../components/Logo/Logo";
import Icon from "../../components/ComponIcon/Icon";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const NotFound = () => {
  const location = useLocation();
  const goHomeLink = useRef(location?.state?.from ?? WELCOME_PAGE_ROUTE);

  return (
    <>
        <div className={css.block_error}>
          <Link className={css.logo_wrap} to={WELCOME_PAGE_ROUTE}>
            <div>
              <Icon className={css.logo} sprite={sprite} iconId="Weight" />
            </div>
            <div>
              <Icon
                className={css.logo_name}
                sprite={sprite}
                iconId="PowerPulse"
              />
            </div>
          </Link>
          <h1 className={css.title_one}>404</h1>
          <p className={css.text_error}>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </p>
          <Link className={css.link_goHome} to={goHomeLink.current}>
            Go Home
          </Link>
        </div>
        <BackgroundImage />

    </>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import sprite from "../../images/svg/sprite.svg";
import BgImageWelcomePage from "../../components/BgImageWelcomePage/BgImageWelcomePage";
import css from "./WelcomPage.module.css";

const WelcomePage = () => {
  return (
    <>
      <div>
        <section className={css.section}>
          <div className={css.wrapper}>
            <Logo />{" "}
            <h1 className={css.title}>
              Transforming your body shape with Power Pulse
            </h1>
            <svg className={css.svg}>
              <use href={`${sprite}#icon-line`} />
            </svg>
            <div className={css.buttonWrapper}>
              <Link className={css.link} to="/signup">
                <Button type="submit" text="Sign Up" />
              </Link>
              <Link to="/signin">
                <Button type="submit" text="Sign In" />
              </Link>
            </div>
          </div>

          <BgImageWelcomePage></BgImageWelcomePage>
        </section>
      </div>
    </>
  );
};

export default WelcomePage;

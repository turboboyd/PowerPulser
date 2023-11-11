import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

import BgImageWelcomePage from "../../components/BgImageWelcomePage/BgImageWelcomePage";
import css from "./WelcomPage.module.css";
import Container from "../../components/Container/Container";

const WelcomePage = () => {
  return (
    <section className={css.section}>
      <Container>
        {/* <div className={css.wrapper}> */}
        <Logo />{" "}
        {/* <h1 className={css.title}>
          Transforming your body shape with Power Pulse
        </h1> */}
        {/* <svg className={css.svg}>
            <use href={`${sprite}#icon-line`} />
          </svg> */}
        {/* <div className={css.buttonWrapper}>
            <Link className={css.link} to="/signup">
              <Button type="submit" text="Sign Up" />
            </Link>
            <Link to="/signin">
              <Button type="submit" text="Sign In" />
            </Link>
          </div> */}
        {/* </div> */}
      </Container>

      <BgImageWelcomePage/>

    </section>
  );
};

export default WelcomePage;

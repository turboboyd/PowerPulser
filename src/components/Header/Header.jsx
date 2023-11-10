import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import css from "./Header.module.css";
import { PROFILE_ROUTE } from "../../utils/const";

import sprite from "../../images/svg/InlineSprite.svg";
import Icon from "../ComponIcon/Icon";
import Logo from "../Logo/Logo";
import RouteList from "../RouteList/RouteList";

const Header = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = useCallback(() => {
    setBurgerOpen((prevIsBurgerOpen) => !prevIsBurgerOpen);
  }, []);

  return (
    <>
      <header className={css.header_user}>
        <Logo />
        {isAuth ? (
          <div className={css.wrap}>
            <nav className={css.nav}>
              <RouteList />
            </nav>
            <ul className={css.list_user}>
              <li>
                <Link>
                  <Icon
                    className={css.iconSettings}
                    sprite={sprite}
                    iconId="Settings"
                  />
                </Link>
              </li>
              <li>
                <Link to={PROFILE_ROUTE}>
                  <div className={css.avatart}>
                    <Icon
                      className={css.svg_user}
                      sprite={sprite}
                      iconId="Gridicons_user"
                    />
                  
                  </div>
                </Link>
              </li>
              <li className={css.logout_desk}>
                <Link className={css.logout}>
                  Logout{" "}
                  <Icon
                    className={css.svg_logout}
                    sprite={sprite}
                    iconId="Log-out"
                  />
                </Link>
              </li>
            </ul>

            <button className={css.burger_btn} onClick={toggleBurger}>
              <Icon className={css.burger_btn} sprite={sprite} iconId="Menu" />
            </button>
          </div>
        ) : null}
      </header>

      <nav
        className={` ${
          isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
        }`}
      >
        <button className={css.close_btn} onClick={toggleBurger}>
          <Icon className={css.close_btn} sprite={sprite} iconId="Close" />
        </button>
        <RouteList />

        <Link className={css.logout}>
          Logout{" "}
          <Icon className={css.svg_logout} sprite={sprite} iconId="Log-out" />
        </Link>
      </nav>
    </>
  );
};

export default Header;

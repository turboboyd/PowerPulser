import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import css from "./Header.module.css";
import { PROFILE_ROUTE } from "../../utils/const";


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
    <div className={css.line}>
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
                    iconId="Settings"
                  />
                </Link>
              </li>
              <li>
                <Link to={PROFILE_ROUTE}>
                  <div className={css.avatart}>
                    <Icon
                      className={css.svg_user}
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
                    iconId="Log-out"
                  />
                </Link>
              </li>
            </ul>

            <button className={css.burger_btn} onClick={toggleBurger}>
              <Icon className={css.burger_btn} iconId="Menu" />
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
          <Icon className={css.close_btn} iconId="Close" />
        </button>
        <RouteList />

        <Link className={css.logout}>
          Logout{" "}
          <Icon className={css.svg_logout} iconId="Log-out" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;

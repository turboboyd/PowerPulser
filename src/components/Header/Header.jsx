import { Link } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/const";
import LogoPowerPulse from "../../images/svg/PowerPulse.svg";
import Vectorlogo from "../../images/svg/Vector_logo.svg";
import iconLogOut from "../../images/svg/log-out.svg";
import iconClose from "../../images/svg/x.svg";
import iconBurger from "../../images/svg/menu-02.svg";


import { ReactComponent as Sprite } from "../../images/svg/sprite1.svg";








const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <header className={css.header}>
        <Link className={css.logo_wrap} to={DIARY_ROUTE}>
          <div>
            <img className={css.logo1} src={Vectorlogo} alt="Logo" />
          </div>
          <div>
            <img className={css.logo2} src={LogoPowerPulse} alt="Logo" />
          </div>
        </Link>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <Link className={css.link} to={DIARY_ROUTE}>
                Diary
              </Link>
            </li>
            <li>
              <Link className={css.link} to={PRODUCT_ROUTE}>
                Products
              </Link>
            </li>
            <li>
              <Link className={css.link} to={EXERCISES_ROUTE}>
                Exercises
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={css.list_user}>
          <li>
            <Link>
              <img className={css.iconSettings} alt="Settings" />
            </Link>
          </li>
          <li>
            <Link to={PROFILE_ROUTE}>
              <div className={css.avatart}></div>
            </Link>
          </li>
          <li>
            <Link className={css.logout}>
              Logout
              <svg
                className={css.logout_desk}
                src={iconLogOut}
                style={{ fill: "green" }}
                alt="LogOut"
              />
            </Link>
            <Sprite id="settings-01" />
            <svg style={{ fill: "red" }}>
              <use href={`${Sprite}#settings-01`} />
            </svg>
          </li>
        </ul>

        <button className={css.burger_btn} onClick={toggleBurger}>
          <img className={css.close} src={iconBurger} alt="OpenMenu" />
        </button>
      </header>

      <nav
        className={` ${
          isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
        }`}
      >
        <button className={css.close_btn} onClick={toggleBurger}>
          <img className={css.close} src={iconClose} alt="Close" />
        </button>
        <ul className={css.list}>
          <li className={css.item}>
            <Link className={css.link} to={DIARY_ROUTE}>
              Diary
            </Link>
          </li>
          <li>
            <Link className={css.link} to={PRODUCT_ROUTE}>
              Products
            </Link>
          </li>
          <li>
            <Link className={css.link} to={EXERCISES_ROUTE}>
              Exercises
            </Link>
          </li>
        </ul>

        <Link className={css.logout}>
          Logout
          <img className={css.logo3} src={iconLogOut} alt="LogOut" />
        </Link>
      </nav>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/const";

import Sprite from "../../images/svg/menu-02.svg";
import Icon from "../../images/svg/icons.svg";




const SvgIcon = ({ symbolId, className }) => (
  <svg className={className}>
    <use xlinkHref={`#${symbolId}`} />
  </svg>
);





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
            {/* <img className={css.logo1} src={Vectorlogo} alt="Logo" /> */}
          </div>
          <div>
            {/* <img className={css.logo2} src={LogoPowerPulse} alt="Logo" /> */}
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
              {/* <img className={css.iconSettings} alt="Settings" /> */}
            </Link>
          </li>
          <li>
            <Link to={PROFILE_ROUTE}>
              <div className={css.avatart}></div>
            </Link>
          </li>
          <li>
            <svg className={css.svg}>
              <use xlinkHref="#log-out-01" />
            </svg>
            <svg>
              <use xlinkHref={`${Icon}#icon-close`} />
            </svg>
            {/* <svg>
              <use xlinkHref={`#${menu_02}`} />
            </svg> */}
            <svg>
              <use xlinkHref="#icon-1" />
            </svg>

            <SvgIcon symbolId="menu-02" className="menu-icon" />
          </li>
        </ul>

        <button className={css.burger_btn} onClick={toggleBurger}>
          {/* <img className={css.close} src={iconBurger} alt="OpenMenu" /> */}
        </button>
      </header>

      <nav
        className={` ${
          isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
        }`}
      >
        <button className={css.close_btn} onClick={toggleBurger}>
          {/* <img className={css.close} src={iconClose} alt="Close" /> */}
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

        <Link className={css.logout}>Logout</Link>
      </nav>
    </>
  );
};

export default Header;

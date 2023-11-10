import { Link } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/const";

// import Sprite from "../../images/sv/";
import sprite from "../../images/svg/InlineSprite.svg";

// const SvgIcon = ({ symbolId, className }) => (
//   <svg className={className}>
//     <use xlinkHref={`#${symbolId}`} />
//   </svg>
// );import sprite from "../../images/svg/sprite.svg";

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
            <svg className={css.logo}>
              <use href={`${sprite}#Icon-Logo`} />
            </svg>
          </div>
          <div>
            <svg className={css.logo_name}>
              <use href={`${sprite}#PowerPulse`} />
            </svg>
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
              <svg className={css.iconSettings}>
                <use href={`${sprite}#menu-02`} />
              </svg>
            </Link>
          </li>
          <li>
            <Link to={PROFILE_ROUTE}>
              <div className={css.avatart}></div>
            </Link>
          </li>
          <li>
            <Link className={css.logout}>
              Logout{" "}
              <svg className={css.svg_logout}>
                <use href={`${sprite}#log-out-01`} />
              </svg>
            </Link>
          </li>
        </ul>

        <button className={css.burger_btn} onClick={toggleBurger}>
          {/* <img className={css.close} src={iconBurger} alt="OpenMenu" /> */}
          <div>
            <svg className={css.svg_burger}>
              <use href={`${sprite}#menu-02`} />
            </svg>
          </div>
        </button>
      </header>

      <nav
        className={` ${
          isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
        }`}
      >
        <button className={css.close_btn} onClick={toggleBurger}>
          {/* <img className={css.close} src={iconClose} alt="Close" /> */}
          <svg className={css.svg_burger}>
            <use href={`${sprite}#x`} />
          </svg>
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
          Logout{" "}
          <svg className={css.svg_logout}>
            <use href={`${sprite}#log-out-01`} />
          </svg>
        </Link>
      </nav>
    </>
  );
};

export default Header;

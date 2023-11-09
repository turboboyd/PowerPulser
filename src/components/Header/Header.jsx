import { Link } from "react-router-dom";
import css from "./Header.module.css";
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/const";
import LogoPowerPulse from "../../images/svg/PowerPulse.svg";
import Vectorlogo from "../../images/svg/Vector_logo.svg";

const Header = () => {

  const[isOpen, useisOpen] = isOpen(false)

  return (
    <header className={css.header}>
      <Link className={css.logo_wrap} to={DIARY_ROUTE}>
        <div>
          <img className={css.logo1} src={Vectorlogo} alt="Logo" />
        </div>
        <div>
          <img className={css.logo2} src={LogoPowerPulse} alt="Logo" />
        </div>
      </Link>
      <nav>
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
      <div className={css.list}>
        <Link>
          <img className={css.logo1} src={Vectorlogo} alt="user" />
        </Link>
        <Link to={PROFILE_ROUTE}>
          <div className={css.avatart}></div>
        </Link>
        <Link className={css.button}>Logout</Link>
      </div>

      <div>
        <button>Бургер</button>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../../../utils/const";
import css from "./UserBurgerMenu.module.css";
import Icon from "../../ComponIcon/Icon";
import UserNav from "../UserNav/UserNav"


const UserBurgerMenu = ({ handleLogout, isBurgerOpen, toggleBurger }) => {
  return (
    <div
      data-type="burger-nav"
      className={` ${
        isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
      }`}
    >
      <button className={css.close_btn} onClick={toggleBurger}>
        <Icon className={css.close_btn} iconId="Close" />
      </button>
      <UserNav />

      <button onClick={handleLogout} to="/" className={css.logout}>
        Logout <Icon className={css.svg_logout} iconId="Log-out" />
      </button>
    </div>
  );
};

export default UserBurgerMenu;

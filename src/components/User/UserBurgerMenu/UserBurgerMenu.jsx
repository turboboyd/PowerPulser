import css from "./UserBurgerMenu.module.css";
import Icon from "../../ComponIcon/Icon";
import UserNav from "../UserNav/UserNav";
import { CloseBtn } from "../../Button";

const UserBurgerMenu = ({
  handleLogout,
  isBurgerOpen,
  toggleBurger,
  profileSettings,
}) => {
  return (
    <div
      data-type="burger-nav"
      className={` ${
        isBurgerOpen ? `${css.burger_wrap} ${css.open}` : `${css.burger_wrap}`
      }`}
    >
      <CloseBtn click={toggleBurger} />

      {profileSettings && <nav className={css.user_nav_bureger}>
        <UserNav />
      </nav>}

      <button onClick={handleLogout} to="/" className={css.logout}>
        Logout <Icon className={css.svg_logout} iconId="Log-out" />
      </button>
    </div>
  );
};

export default UserBurgerMenu;

import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../../../utils/const";
import css from "./UserBar.module.css";
import Icon from "../../ComponIcon/Icon";



const UserBar = ({handleLogout}) => {
    return (
      <div className={css.user_bar}>
        <Link to={PROFILE_ROUTE}>
          <Icon className={css.iconSettings} iconId="Settings" />
        </Link>

        <div className={css.avatart}>
          <Icon className={css.svg_user} iconId="Gridicons_user" />
        </div>

        <button
          onClick={handleLogout}
          className={`${css.logout_desk} ${css.logout}`}
        >
          Logout <Icon className={css.svg_logout} iconId="Log-out" />
        </button>
      </div>
    );
}

export default UserBar;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PROFILE_ROUTE } from "../../../utils/const";
import css from "./UserBar.module.css";
import Icon from "../../ComponIcon/Icon";
import { selectUser } from "../../../redux/auth/authSelectors";

const UserBar = ({ handleLogout }) => {
  const user = useSelector(selectUser);
  const avatarUser = user.avatarURL;

  const userAvatar = (
    <img
      src={avatarUser}
      alt="Avatar"
      style={{ borderRadius: "100%", width: "100%", height: "100%" }}
    />
  );

  return (
    <div className={css.user_bar}>
      <Link to={PROFILE_ROUTE}>
        <Icon className={css.iconSettings} iconId="Settings" />
      </Link>

      <div className={css.avatart}>
        {avatarUser ? (
          userAvatar
        ) : (
          <Icon className={css.svg_user} iconId="Gridicons_user" />
        )}
      </div>

      <button
        onClick={handleLogout}
        className={`${css.logout_desk} ${css.logout}`}
      >
        Logout <Icon className={css.svg_logout} iconId="Log-out" />
      </button>
    </div>
  );
};

export default UserBar;

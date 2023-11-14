import Icon from "../ComponIcon/Icon";
import css from "./Avatar.module.css";

import { selectUser } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const Avatar = () => {
  const user = useSelector(selectUser);

  const handleChangeAvatar = () => {};
  return (
    <>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>
          <Icon className={css.iconAvatar} iconId={"icon-avatar"} />
        </div>
        <form className={css.form}>
          <input
            type="file"
            name="file"
            id="inputFile"
            style={{ display: "none" }}
            onChange={handleChangeAvatar}
          />
          <label htmlFor="inputFile" style={{ cursor: "pointer" }}>
            <Icon className={css.iconUpload} iconId={"icon-add-avatar"} />
          </label>
        </form>
        <p className={css.textUserName}>{user.name}</p>
        <p className={css.textUser}>User</p>
      </div>
    </>
  );
};
export default Avatar;

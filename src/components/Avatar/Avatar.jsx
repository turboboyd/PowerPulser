import { useState } from "react";

import Icon from "../ComponIcon/Icon";
import css from "./Avatar.module.css";

import { selectUser } from "../../redux/auth/authSelectors";
import { selectAvatar } from "../../redux/avatar/avatarSelectors";
import { useSelector, useDispatch } from "react-redux";
import { uploadAvatar } from "../../redux/avatar/avatarOperations";

const Avatar = () => {
  const user = useSelector(selectUser);
  const avatar = useSelector(selectAvatar);
  const [avatarUser, setAvatarUser] = useState(user.avatarURL);
  const dispatch = useDispatch();

  const userAvatar = (
    <img
      src={avatarUser}
      alt="Avatar"
      style={{ borderRadius: "100%", width: "100%", height: "100%" }}
    />
  );
  const avatarLogo = <Icon className={css.iconAvatar} iconId={"icon-avatar"} />;

  const handleChangeAvatar = (e) => {
    // let formData = new FormData();
    // const file = e.target.files[0];

    // formData.append("avatar", file);
    // setAvatarUser(file);
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatarUser(objectURL);
    }

    let formData = new FormData();
    formData.append("avatar", file);

    dispatch(uploadAvatar(formData));
  };

  return (
    <>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>{avatar ? userAvatar : avatarLogo}</div>
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

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
  const [avatarUser, setAvatarUser] = useState(avatar);
  const dispatch = useDispatch();

  const userAvatar = (
    <img
      src={avatarUser}
      width="100%"
      alt="Avatar"
      style={{ borderRadius: "100%" }}
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

    console.log("Selected File:", file);
    console.log("FormData:", [...formData]);

    dispatch(uploadAvatar(formData));
  };

  return (
    <>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>{avatar ? avatarLogo : userAvatar}</div>
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

import TitlePage from "../../components/TitlePage/TitlePage";
import UserForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";

import css from "./ProfilePage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfilePage = () => {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const [avatarURL, setAvatarURL] = useState(userInfo.avatarURL);

  useEffect(() => {
    setAvatarURL(userInfo.avatarURL);
  }, [userInfo.avatarURL]);

  return (
    <>
      <TitlePage title="Profile Settings" className={css.title} />
      <div className={css.container}>
        <UserForm />
        <UserCard userInfo={userInfo} />
      </div>
    </>
  );
};

export default ProfilePage;

import TitlePage from "../../components/TitlePage/TitlePage";
import UserForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";

import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <>
      <TitlePage title="Profile Settings" className={css.title} />
      <div className={css.container}>
        <UserForm />
        <UserCard />
      </div>
    </>
  );
};

export default ProfilePage;

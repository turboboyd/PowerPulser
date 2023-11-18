import TitlePage from "../../components/TitlePage/TitlePage";
import UseForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";

import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <>
      <TitlePage title="Profile Settings" className={css.title} />
      <div className={css.container}>
        <UseForm />
        <UserCard />
      </div>
    </>
  );
};

export default ProfilePage;

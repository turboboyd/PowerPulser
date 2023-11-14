import TitlePage from "../../components/TitlePage/TitlePage";
import UseForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <>
      <div className={css.pageWrapper}>
        <TitlePage title="Profile Settings" />
        <div className={css.container}>
          <UseForm />
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

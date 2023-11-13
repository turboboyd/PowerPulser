import TitlePage from "../../components/TitlePage/TitlePage";
import UseForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";

const ProfilePage = () => {
  return (
    <>
      <TitlePage title="Profile Settings" />
      <UseForm />
      <UserCard />
    </>
  );
};

export default ProfilePage;

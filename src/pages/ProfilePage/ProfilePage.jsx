import { Container, Section } from "../../components/Container";
import TitlePage from "../../components/TitlePage/TitlePage";
import UseForm from "../../components/UserForm/UserForm";
import UserCard from "../../components/UserCard/UserCard";

import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <Section className={css.section}>
      <Container>
        <TitlePage title="Profile Settings" className={css.title} />
        <div className={css.container}>
          <UseForm />
          <UserCard />
        </div>
      </Container>
    </Section>
  );
};

export default ProfilePage;

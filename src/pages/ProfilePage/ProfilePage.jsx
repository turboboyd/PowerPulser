import { useEffect, useState } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';
import UserForm from '../../components/UserForm/UserForm';
import UserCard from '../../components/UserCard/UserCard';

import useAuth from '../../hooks/useAuth';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  const { user } = useAuth();
  const avatar = user.avatarURL;
  const [, setAvatarURL] = useState(avatar);

  useEffect(() => {
    setAvatarURL(avatar);
  }, [avatar]);

  return (
    <>
      <TitlePage title="Profile Settings" className={css.title} />
      <div className={css.container}>
        <UserForm user={user} />
        <UserCard user={user} />
      </div>
    </>
  );
};

export default ProfilePage;

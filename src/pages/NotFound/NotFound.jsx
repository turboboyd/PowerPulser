import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
import useAuth from '../../hooks/useAuth';
import Logo from '../../components/Logo/Logo';
import getLogoLink from '../../utils/getLogoLink';

const NotFound = () => {
  const { isVerify, user } = useAuth();
  const text = isVerify
    ? user.profileSettings
      ? 'Go Diary'
      : 'Go Profile'
    : 'Go Home';
  const link = getLogoLink(isVerify, user);
  const isNotFoundPage = true;
  return (
    <>
      <Logo isNotFoundPage={isNotFoundPage} />
      <h1 className={css.title_one}>404</h1>
      <p className={css.text_error}>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </p>
      <Link className={css.link_goHome} to={link}>
        {text}
      </Link>
    </>
  );
};

export default NotFound;

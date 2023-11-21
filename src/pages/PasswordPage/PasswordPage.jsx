import { Link, useLocation } from 'react-router-dom';
import css from './PasswordPage.module.css';
import { PASSWORD_ROUTE, SIGN_IN_ROUTE} from '../../utils/const';
import PasswordForm from '../../components/Form/PasswordForm/PasswordForm';
import Logo from '../../components/Logo/Logo';

const PasswordPage = () => {
  const location = useLocation();
  const resetPassword = location.pathname === PASSWORD_ROUTE;
  const title = resetPassword ? 'Reset Your Password' : 'Create New Password';
  const text = resetPassword
    ? `Enter your email and we'll send you a link to reset your password.`
    : ' Your new password must be different from previous used passwords.';
    const textBtn = resetPassword ? 'Send' : 'Reset Password';

  return (
    <>
      <Logo />
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
      <PasswordForm
        resetPassword={resetPassword}
        textBtn={textBtn}
        title={title}
      />
      {resetPassword && <div className={css.textWrapper}>
        <p className={css.textHint}>Back to </p>
        <Link className={css.link} to={SIGN_IN_ROUTE}>
          Login
        </Link>
      </div>}
    </>
  );
};

export default PasswordPage;

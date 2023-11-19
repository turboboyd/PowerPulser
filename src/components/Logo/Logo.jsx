import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import Icon from "../ComponIcon/Icon";
import useAuth from "../../hooks/useAuth";
import getLogoLink from "../../utils/getLogoLink";

const Logo = ({ isNotFoundPage }) => {
  const { isVerify, user } = useAuth();
  const link = getLogoLink(isVerify, user);

  return (
    <Link className={css.logo_wrap} to={link}>
      <div>
        <Icon
          className={
            !isNotFoundPage ? `${css.logo} ` : `${css.logo} ${css.logo_white}`
          }
          iconId="Weight"
        />
      </div>
      <div>
        <Icon className={css.logo_name} iconId="PowerPulse" />
      </div>
    </Link>
  );
};

export default Logo;

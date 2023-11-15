import { Link, useLocation } from "react-router-dom";
import css from "./Logo.module.css";
import { DIARY_ROUTE, WELCOME_PAGE_ROUTE } from "../../utils/const";
import Icon from "../ComponIcon/Icon";
import { useAuth } from "../../hooks/useAuth";

const Logo = () => {
   const location = useLocation();
   const isNotFound = location.pathname === "*";
   console.log('isNotFound: ', isNotFound);

  const { isVerify } = useAuth();
  const link = isVerify ? DIARY_ROUTE : WELCOME_PAGE_ROUTE;

  return (
    <Link className={css.logo_wrap} to={link}>
      <div>
        <Icon className={css.logo} iconId="Weight" />
      </div>
      <div>
        <Icon className={css.logo_name} iconId="PowerPulse" />
      </div>
    </Link>
  );
};

export default Logo;

import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import { DIARY_ROUTE, WELCOME_PAGE_ROUTE } from "../../utils/const";
import sprite from "../../images/svg/InlineSprite.svg";
import Icon from "../ComponIcon/Icon";
import { useSelector } from "react-redux";
import { selectIsVerify } from "../../redux/auth/authSelectors";

const Logo = () => {

  const isVerify = useSelector(selectIsVerify);
  const link = isVerify ? DIARY_ROUTE : WELCOME_PAGE_ROUTE;
  return (
    <Link className={css.logo_wrap} to={link}>
      <div>
        <Icon className={css.logo} sprite={sprite} iconId="Weight" />
      </div>
      <div>
        <Icon className={css.logo_name} sprite={sprite} iconId="PowerPulse" />
      </div>
    </Link>
  );
};

export default Logo;

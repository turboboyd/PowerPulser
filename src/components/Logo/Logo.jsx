import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import { DIARY_ROUTE } from "../../utils/const";
import sprite from "../../images/svg/InlineSprite.svg";
import Icon from "../ComponIcon/Icon";

const Logo = () => {
  return (
    <Link className={css.logo_wrap} to={DIARY_ROUTE}>
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

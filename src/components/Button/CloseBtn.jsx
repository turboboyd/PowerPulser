import Icon from "../ComponIcon/Icon";
import css from "./CloseBtn.module.css";


const CloseBtn = ({ className, click }) => {
  const style = `${css.close_btn}  ${className || ""}`;
  return (
    <button onClick={click} className={style}>
      <Icon className={css.close_btn} iconId="Close" />
    </button>
  );
};

export default CloseBtn;


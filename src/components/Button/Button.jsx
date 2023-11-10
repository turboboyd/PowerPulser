import css from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={css.button}>{text}</button>;
};

export default Button;

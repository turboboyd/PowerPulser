import css from "./BgImageWelcomePage.module.css";

const BgImageWelcomePage = ({ children }) => {
  return <div className={css.bgImg}>{children}</div>;
};

export default BgImageWelcomePage;

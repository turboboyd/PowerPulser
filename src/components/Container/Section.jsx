import {
  WELCOME_PAGE_ROUTE,
  PROFILE_ROUTE,
  DIARY_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  PRODUCT_ROUTE,
} from "../../utils/const";
import StatisticsInfo from "../StatisticsInfo/StatisticsInfo";
import css from "./Section.module.css";
import { useLocation } from "react-router-dom";

const Section = ({ children, isNotFoundPage }) => {
  const location = useLocation();

  const showStatisticsInfoRoutes = [
    WELCOME_PAGE_ROUTE,
    SIGN_UP_ROUTE,
    SIGN_IN_ROUTE,
  ];

  const styles = {
    [WELCOME_PAGE_ROUTE]: css.WELCOME_PAGE_section,
    [SIGN_UP_ROUTE]: css.AUTH_PAGE_section,
    [SIGN_IN_ROUTE]: css.AUTH_PAGE_section,
    [PRODUCT_ROUTE]: css.PRODUCT_section,
  };
  
  const sectionStyle = `${css.section} ${
    styles[location.pathname] || `${css.section}`
  } ${isNotFoundPage ? css.NotFound_section : ""}`;

  return (
    <section className={sectionStyle}>
      {children}
      {showStatisticsInfoRoutes.includes(location.pathname) && (
        <StatisticsInfo />
      )}
    </section>
  );
};

export default Section;

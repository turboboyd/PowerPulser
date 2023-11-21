import useAuth from 'hooks/useAuth';
import {
  WELCOME_PAGE_ROUTE,
  PROFILE_ROUTE,
  DIARY_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PASSWORD_ROUTE,
} from '../../utils/const';
import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';
import css from './Section.module.css';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  const location = useLocation();
  const { id } = useParams();
  // const { exercisesItemsSelectFilter } = useExercise();
  const showStatisticsInfoRoutes = [
    WELCOME_PAGE_ROUTE,
    SIGN_UP_ROUTE,
    SIGN_IN_ROUTE,
    PASSWORD_ROUTE,
  ];
    useAuth()
  const styles = {
    [WELCOME_PAGE_ROUTE]: css.WELCOME_PAGE_section,
    [SIGN_UP_ROUTE]: css.AUTH_PAGE_section,
    [SIGN_IN_ROUTE]: css.AUTH_PAGE_section,
    [PASSWORD_ROUTE]: css.AUTH_PAGE_section,
    [`${PASSWORD_ROUTE}/${id}`]: css.AUTH_PAGE_section,
    [PRODUCT_ROUTE]: css.PRODUCT_section,
    [PROFILE_ROUTE]: css.PROFILE_section,
    [DIARY_ROUTE]: css.DIARY_section,
    [EXERCISES_ROUTE]: css.EXERCISES_section,
    [`${EXERCISES_ROUTE}/${id}`]: css.EXERCISES_categot_section,
  };

  const sectionStyle = styles[location.pathname] || css.NotFound_section;

  return (
    <section className={`${css.section}  ${sectionStyle}`}>
      {children}
      {showStatisticsInfoRoutes.includes(location.pathname) && (
        <StatisticsInfo />
      )}
    </section>
  );
};

export default Section;


Section.propTypes = {
  children: PropTypes.node.isRequired,
};
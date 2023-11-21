import css from "./Container.module.css"
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;


Container.propTypes = {
  children: PropTypes.node.isRequired,
};
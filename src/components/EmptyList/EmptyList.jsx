import css from "./EmptyList.module.css";
import PropTypes from 'prop-types';

const EmptyList = ({ listName }) => {
  return (
    <div className={css.notFoundPlugTextWrap}>
      <p className={css.notFoundPlugText}>Not found {listName}</p>
    </div>
  );
};


EmptyList.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default EmptyList;

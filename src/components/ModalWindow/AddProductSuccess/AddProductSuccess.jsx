import css from './AddProductSuccess.module.css';
import PropTypes from 'prop-types';
import foodIcon from '../../../images/foodIcon.png';
import { NavLink } from 'react-router-dom';
import { DIARY_ROUTE } from '../../../utils/const';
import Icon from '../../ComponIcon/Icon';

const AddProductSuccess = ({ handleModalSuccess, selectedProduct }) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={foodIcon} alt="Avocado icon" />
      <strong className={css.title}>Well done</strong>
      <p className={css.text}>
        Calories:{' '}
        <span className={css.textCalories}>{selectedProduct.calories}</span>
      </p>

      <button className={css.button} type="button" onClick={handleModalSuccess}>
        Next product
      </button>
      <div className={css.linkWrapper}>
        <NavLink
          to={DIARY_ROUTE}
          className={css.link}
          onClick={handleModalSuccess}
        >
          To the diary
        </NavLink>
        <Icon className={css.iconArrow} iconId="Arrow" />
      </div>
    </div>
  );
};

AddProductSuccess.propTypes = {
  handleModalSuccess: PropTypes.func.isRequired,
  selectedProduct: PropTypes.shape({
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddProductSuccess;

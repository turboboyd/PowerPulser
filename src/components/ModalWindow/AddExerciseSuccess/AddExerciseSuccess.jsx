import css from './AddExerciseSuccess.module.css';
import thumb from '../../../images/thumbIcon.png';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { DIARY_ROUTE } from '../../../utils/const';
import Icon from '../../ComponIcon/Icon';

const AddExerciseSuccess = ({ handleModalSuccess, selectedExercise }) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={thumb} alt="Thumb up icon" />
      <strong className={css.title}>Well done</strong>
      <p className={css.text1}>
        Your time: <span className={css.textTime}>{selectedExercise.time}</span>
      </p>
      <p className={css.text2}>
        Burned calories:{' '}
        <span className={css.textCalories}>{selectedExercise.calories}</span>
      </p>

      <button className={css.button} type="button" onClick={handleModalSuccess}>
        Next exercise
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

AddExerciseSuccess.propTypes = {
  handleModalSuccess: PropTypes.func.isRequired,
  selectedExercise: PropTypes.shape({
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddExerciseSuccess;

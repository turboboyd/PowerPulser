import css from './AddExerciseSuccess.module.css';
import thumb from '../../../images/thumbIcon.png';

import { NavLink } from 'react-router-dom';
import { DIARY_ROUTE } from '../../../utils/const';
import Icon from '../../ComponIcon/Icon';

const AddExerciseSuccess = ({ handleModalSuccess, selectedExercise }) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={thumb} alt="Thumb up icon" />
      <strong className={css.title}>Well done</strong>
      <p className={css.text1}>
        Your time:
        <span className={css.textTime}>{selectedExercise.time}</span>
      </p>
      <p className={css.text2}>
        Burned calories:
        <span className={css.textCalories}>{selectedExercise.calories}</span>
      </p>

      <button className={css.button} type="button" onClick={handleModalSuccess}>
        Next exercise
      </button>
      <div className={css.linkWrapper}>
        <NavLink to={DIARY_ROUTE} className={css.link}>
          To the diary
        </NavLink>
        <Icon className={css.iconArrow} iconId="Arrow" />
      </div>
    </div>
  );
};

export default AddExerciseSuccess;

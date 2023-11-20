import css from './ModalExercisesList.module.css';
import capitalizedWord from '../../utils/capitalizedWord';
import PropTypes from 'prop-types';

const ModalExercisesList = ({ exercise }) => {
  return (
    <ul className={css.cardList}>
      <li className={css.cardItem}>
        <p className={css.cardText}>Name:</p>
        <strong className={css.cardTitle}>
          {capitalizedWord(exercise.name)}
        </strong>
      </li>
      <li className={css.cardItem}>
        <p className={css.cardText}>Body part:</p>
        <strong className={css.cardTitle}>
          {capitalizedWord(exercise.bodyPart)}
        </strong>
      </li>
      <li className={css.cardItem}>
        <p className={css.cardText}>Target:</p>
        <strong className={css.cardTitle}>
          {capitalizedWord(exercise.target)}
        </strong>
      </li>
      <li className={css.cardItem}>
        <p className={css.cardText}>Equipment:</p>
        <strong className={css.cardTitle}>
          {capitalizedWord(exercise.equipment)}
        </strong>
      </li>
    </ul>
  );
};

ModalExercisesList.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalExercisesList;

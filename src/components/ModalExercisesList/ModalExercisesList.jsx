import css from './ModalExercisesList.module.css';
import capitalizedWord from '../../utils/capitalizedWord';

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

export default ModalExercisesList;

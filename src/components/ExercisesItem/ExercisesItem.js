import css from './ExercisesItem.module.css';
import Icon from '../ComponIcon/Icon';
import { useState } from 'react';
import BasicModalWindow from '../ModalWindow/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../ModalWindow/AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../ModalWindow/AddExerciseSuccess/AddExerciseSuccess';

const ExercisesItem = ({ exercise }) => {
  const [modalExercise, setModalExercise] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleModalExercise = () => {
    setModalExercise((state) => !state);
  };

  const handleModalSuccess = () => {
    setModalSuccess((state) => !state);
  };

  const handleSelectedExercise = (data) => {
    setSelectedExercise(data);
  };
  return (
    <div className={css.exerciseWrapper}>
      <div className={css.exerciseCardTopPart}>
        <p className={css.exerciseCardTopDiet}>workout</p>
        <button className={css.exerciseArrow} onClick={handleModalExercise}>
          Start
          <Icon className={css.exerciseArrowSvg} iconId="Arrow" />
        </button>
      </div>
      {modalExercise && (
        <BasicModalWindow handleModalToggle={handleModalExercise}>
          <AddExerciseForm
            handleModalExercise={handleModalExercise}
            handleModalSuccess={handleModalSuccess}
            exercise={exercise}
            handleSelectedExercise={handleSelectedExercise}
          />
        </BasicModalWindow>
      )}
      {modalSuccess && (
        <BasicModalWindow handleModalToggle={handleModalSuccess}>
          <AddExerciseSuccess
            handleModalSuccess={handleModalSuccess}
            selectedExercise={selectedExercise}
          />
        </BasicModalWindow>
      )}
      <div className={css.exerciseName}>
        <Icon className={css.exerciseManSvg} iconId="Runner" />
        <h3 className={css.exerciseNameText}>{exercise.name}</h3>
      </div>
      <ul className={css.exerciseCardLowPart}>
        <li>
          Burned calories:
          <span>{exercise.burnedCalories}</span>
        </li>
        <li>
          Body part:
          <span className={css.exerciseCardItem}>{exercise.bodyPart}</span>
        </li>
        <li>
          Target:
          <span className={css.exerciseCardItem}>{exercise.target}</span>
        </li>
      </ul>
    </div>
  );
};
export default ExercisesItem;

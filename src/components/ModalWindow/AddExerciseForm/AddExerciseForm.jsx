import { useState } from 'react';
import css from './AddExerciseForm.module.css';
import Timer from '../../Timer/Timer';

// const exercise = {
//   _id: {
//     $oid: '64f2458d6f67bc34bae4f801',
//   },
//   bodyPart: 'upper arms',
//   equipment: 'leverage machine',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
//   name: 'assisted triceps dip (kneeling)',
//   target: 'triceps',
//   burnedCalories: 233,
//   time: 3,
// };

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const capitalizedWord = (word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
};

const AddExerciseForm = ({
  handleModalExercise,
  handleModalSuccess,
  handleSelectedExercise,
  exercise,
}) => {
  const [dynamicCalories, setDynamicCalories] = useState('');
  const [exerciseTime, setExerciseTime] = useState('');

  let date = new Date();
  const formattedDate = formatDate(date);
  const exerciseToDiary = {
    date: formattedDate,
    exerciseId: exercise._id,
    time: exerciseTime,
    calories: dynamicCalories,
  };

  const handleAddToDiary = () => {
    console.log(exerciseToDiary);
    handleModalExercise();
    handleModalSuccess();
    handleSelectedExercise(exerciseToDiary);
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <img
            className={css.image}
            src={exercise.gifUrl}
            alt="Exercise example"
          />
          <p className={css.textTime}>Time</p>

          <div className={css.timerWrapper}>
            <Timer
              burnedCalories={exercise.burnedCalories}
              time={exercise.time}
              dynamicCalories={dynamicCalories}
              setDynamicCalories={setDynamicCalories}
              exerciseTime={exerciseTime}
              setExerciseTime={setExerciseTime}
            />
          </div>
        </div>

        <div className={css.listWrapper}>
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

          <button
            className={css.button}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExerciseForm;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './AddExerciseForm.module.css';
import Timer from '../../Timer/Timer';
import formatDate from '../../../utils/formatData';
import ModalExercisesList from '../../ModalExercisesList/ModalExercisesList';
import { addExercisesDiary } from '../../../redux/diary/diaryOperations';

const AddExerciseForm = ({
  handleModalExercise,
  handleModalSuccess,
  handleSelectedExercise,
  exercise,
}) => {
  const [dynamicCalories, setDynamicCalories] = useState('');
  const [exerciseTime, setExerciseTime] = useState('');

  const dispatch = useDispatch();

  let date = new Date();
  const formattedDate = formatDate(date);
  const exerciseToDiary = {
    date: formattedDate,
    exerciseId: exercise._id,
    time: exerciseTime,
    calories: dynamicCalories,
  };

  const handleAddToDiary = () => {
    handleModalExercise();
    handleModalSuccess();
    handleSelectedExercise(exerciseToDiary);
    dispatch(addExercisesDiary(exerciseToDiary));
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <div className={css.imageWrapper}>
            <img
              className={css.image}
              src={exercise.gifUrl}
              alt="Exercise example"
            />
          </div>
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
          <ModalExercisesList exercise={exercise} />
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

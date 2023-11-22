import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useDiary from '../../../hooks/useDiary';
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
  const [exerciseTime, setExerciseTime] = useState(0);

  const dispatch = useDispatch();

  const { diaryError } = useDiary();

  let date = new Date();
  const formattedDate = formatDate(date);
  const exerciseToDiary = {
    date: formattedDate,
    exercise: exercise._id,
    time: exerciseTime,
    calories: dynamicCalories,
  };

  const handleAddToDiary = () => {
    dispatch(addExercisesDiary(exerciseToDiary));
    if (diaryError) {
      console.log('Server error. Try again later');
    } else {
      handleModalExercise();
      handleModalSuccess();
      handleSelectedExercise(exerciseToDiary);
    }
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
            type="submit"
            disabled={exerciseTime > 0 ? false : true}
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
        </div>
      </div>
    </div>
  );
};

AddExerciseForm.propTypes = {
  handleModalExercise: PropTypes.func.isRequired,
  handleModalSuccess: PropTypes.func.isRequired,
  handleSelectedExercise: PropTypes.func.isRequired,
  exercise: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddExerciseForm;

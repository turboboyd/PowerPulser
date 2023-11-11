import exercisesData from '../../RESOURCES/resources/exercises.json'

import css from './ExercisesList.module.css'
import ExercisesItem from '../ExercisesItem/ExercisesItem'
import Icon from '../ComponIcon/Icon'

const ExercisesList = () => {
  const exercises = exercisesData.slice(0, 20)

  return (
    <div>
      <div>
        <button className={css.exerciseArrow}>
          Back
          <Icon className={css.exerciseArrowSvg} iconId="Arrow-back" />
        </button>
        <h3 className={css.exercisesTitle}>Waist</h3>
      </div>
      <div className={css.cardContainer}>
        {exercises.map((exercise) => (
          <ExercisesItem key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default ExercisesList

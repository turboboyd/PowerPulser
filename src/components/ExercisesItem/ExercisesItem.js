import css from './ExercisesItem.module.css'
import Icon from '../ComponIcon/Icon'

const ExercisesItem = ({ exercise }) => {
  return (
    <div className={css.exerciseWrapper}>
      <div className={css.exerciseCardTopPart}>
        <p className={css.exerciseCardTopDiet}>workout</p>
        <button className={css.exerciseArrow}>
          Start
          <Icon className={css.exerciseArrowSvg} iconId="Arrow" />
        </button>
      </div>
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
  )
}
export default ExercisesItem

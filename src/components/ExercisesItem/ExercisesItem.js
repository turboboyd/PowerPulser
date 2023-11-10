import React from 'react'
import sprite from '../../images/svg/sprite.svg'

import css from './ExercisesItem.module.css'

const ExercisesItem = ({ exercise }) => {
  return (
    <div className={css.exerciseWrapper}>
      <div className={css.exerciseCardTopPart}>
        <p>workout</p>
        <button className={css.exerciseArrow}>
          Start
          <svg className={css.exerciseArrowSvg}>
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </button>
      </div>
      <div className={css.exerciseName}>
        <svg className={css.exerciseManSvg}>
          <use href={sprite + '#icon-running-man'}></use>
        </svg>
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

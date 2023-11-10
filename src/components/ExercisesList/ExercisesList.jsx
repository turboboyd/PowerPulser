import React from 'react'
import exercisesData from '../../RESOURCES/resources/exercises.json'

import css from './ExercisesList.module.css'
import ExercisesItem from '../ExercisesItem/ExercisesItem'

const ExercisesList = () => {
  const exercises = exercisesData.slice(0, 20)

  return (
    <div className={css.cardContainer}>
      {exercises.map((exercise) => (
        <ExercisesItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  )
}

export default ExercisesList

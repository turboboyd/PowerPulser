import React, { useState } from 'react'
import ExercisesSubcategoriesItem from './../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem'

import exercisesData from '../../RESOURCES/resources/filters.json'
import css from './ExercisesSubcategoriesList.module.css'

const ExercisesSubcategoriesList = () => {
  const exercises = exercisesData

  const [selectedCategory, setSelectedCategory] = useState('Body parts')

  const filteredExercises = exercises.filter(
    (exercise) => exercise.filter === selectedCategory
  )

  return (
    <div>
      <div>
        <ul>
          <li onClick={() => setSelectedCategory('Body parts')}>Body Parts</li>
          <li onClick={() => setSelectedCategory('Equipment')}>Equipment</li>
          <li onClick={() => setSelectedCategory('Muscles')}>Muscles</li>
        </ul>
      </div>
      <div className={css.exercisesContainer}>
        {filteredExercises.map((exercise) => (
          <ExercisesSubcategoriesItem
            key={exercise._id.$oid}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  )
}

export default ExercisesSubcategoriesList

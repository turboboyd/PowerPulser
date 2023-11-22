import React from 'react';
import css from './ExercisesSubcategoriesItem.module.css';
import capitalizedWord from '../../utils/capitalizedWord';

const ExercisesSubcategoriesItem = ({ exercise, onClick }) => {
  return (
    <div className={css.exerciseItemWrap} onClick={onClick}>
      <img src={exercise.imgURL} alt={exercise.filter} />
      <div className={css.exerciseCard}>
        <span className={css.exerciseItem}>
          {capitalizedWord(exercise.name)}
        </span>
        <span className={css.exerciseFilter}>
          {capitalizedWord(exercise.filter)}
        </span>
      </div>
    </div>
  );
};

export default ExercisesSubcategoriesItem;

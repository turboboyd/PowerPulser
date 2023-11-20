import React from 'react';
import css from './ExercisesSubcategoriesItem.module.css';

const ExercisesSubcategoriesItem = ({ exercise, onClick }) => {
  return (
    <div className={css.exerciseItemWrap} onClick={onClick}>
      <span className={css.exerciseItem}>{exercise.name}</span>
      <img src={exercise.imgURL} alt={exercise.filter} />
    </div>
  );
};

export default ExercisesSubcategoriesItem;
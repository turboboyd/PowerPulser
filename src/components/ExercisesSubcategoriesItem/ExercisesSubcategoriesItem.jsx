import React from 'react';
import PropTypes from 'prop-types';
import css from './ExercisesSubcategoriesItem.module.css';

const ExercisesSubcategoriesItem = ({ exercise, onClick }) => {
  return (
    <div className={css.exerciseItemWrap} onClick={onClick}>
      <span className={css.exerciseItem}>{exercise.name}</span>
      <img src={exercise.imgURL} alt={exercise.filter} />
    </div>
  );
};

ExercisesSubcategoriesItem.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExercisesSubcategoriesItem;
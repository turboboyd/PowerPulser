import React, { useState } from 'react';
import ExercisesSubcategoriesItem from '../../components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import exercisesData from '../../RESOURCES/resources/filters.json';
import css from './ExercisesSubcategoriesList.module.css';

const ITEMS_PER_PAGE = 10;

const ExercisesSubcategoriesList = () => {
  const exercises = exercisesData;
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExercises = exercises.filter(
    (exercise) => exercise.filter === selectedCategory
  );

  const totalPages = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleExercises = filteredExercises.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <ul className={css.sliderUl}>
          <li
            onClick={() => setSelectedCategory('Body parts')}
            className={selectedCategory === 'Body parts' ? css.active : ''}
          >
            Body Parts
          </li>
          <li
            onClick={() => setSelectedCategory('Equipment')}
            className={selectedCategory === 'Equipment' ? css.active : ''}
          >
            Equipment
          </li>
          <li
            onClick={() => setSelectedCategory('Muscles')}
            className={selectedCategory === 'Muscles' ? css.active : ''}
          >
            Muscles
          </li>
        </ul>
      </div>
      <div className={css.exercisesContainer}>
        {visibleExercises.map((exercise) => (
          <ExercisesSubcategoriesItem
            key={exercise._id.$oid}
            exercise={exercise}
          />
        ))}
      </div>
      <div className={css.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? css.active : ''}
          >
            {index + 1}
          </span>
        ))}
    </div>
    </div>
  );
};

export default ExercisesSubcategoriesList;

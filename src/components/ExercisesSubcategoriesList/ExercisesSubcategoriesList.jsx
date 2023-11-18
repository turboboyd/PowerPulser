import React, { useState } from 'react';
import ExercisesSubcategoriesItem from '../../components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import exercisesData from '../../RESOURCES/resources/filters.json';
import css from './ExercisesSubcategoriesList.module.css';

const ExercisesSubcategoriesList = () => {
  const exercises = exercisesData;
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExercises = exercises.filter(
    (exercise) => exercise.filter === selectedCategory
  );

  const ITEMS_PER_ROW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--items-per-row'));
  const ITEM_WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'));
  const ITEM_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-height'));

  const itemsPerPage = ITEMS_PER_ROW * ITEMS_PER_ROW;
  const totalPages = Math.ceil(filteredExercises.length / itemsPerPage);

  const handlePageChange = (page) => {
    const newPage = Math.min(Math.max(1, page), totalPages);
    const newStartIndex = (newPage - 1) * itemsPerPage;

    if (newStartIndex < filteredExercises.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div>
        <ul className={css.sliderUl}>
          <li
            onClick={() => setSelectedCategory('Body parts')}
            className={selectedCategory === 'Body parts' ? `${css.active} ${css.sliderLi}` : css.sliderLi}
          >
            Body Parts
          </li>
          <li
            onClick={() => setSelectedCategory('Equipment')}
            className={selectedCategory === 'Equipment' ? `${css.active} ${css.sliderLi}` : css.sliderLi}
          >
            Equipment
          </li>
          <li
            onClick={() => setSelectedCategory('Muscles')}
            className={selectedCategory === 'Muscles' ? `${css.active} ${css.sliderLi}` : css.sliderLi}
          >
            Muscles
          </li>
        </ul>
      </div>
      <div className={css.exercisesContainer}>
        {filteredExercises.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((exercise) => (
          <div
            key={exercise._id.$oid}
            className={css.exerciseItem}
            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
          >
            <ExercisesSubcategoriesItem exercise={exercise} />
          </div>
        ))}
      </div>
      <div className={css.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          (index * itemsPerPage < filteredExercises.length) && (
            <span
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? `${css.active} ${css.paginationDot} ${css.activeDot}` : css.paginationDot}
            >
              &bull;
            </span>
          )
        ))}
      </div>
    </div>
  );
};

export default ExercisesSubcategoriesList;
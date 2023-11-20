import React, { useState, useEffect } from 'react';
import ExercisesSubcategoriesItem from '../../components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import ExercisesList from '../../components/ExercisesList/ExercisesList';
import css from './ExercisesSubcategoriesList.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchExercisesFilter } from '../../redux/exercises/exercisesOperations';
import useExercise from '../../hooks/useExercise';
import { EXERCISES_ROUTE } from '../../utils/const';

const categories = ["Body parts", "Equipment", "Muscles"];

const ExercisesSubcategoriesList = ({ setShowTitlePage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [selectedSubcategory, setSelectedSubcategoryLocal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const { exercisesFilter: exercisesFilterHook } = useExercise(); 

  const ITEMS_PER_ROW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--items-per-row'));
  const ITEM_WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'));
  const ITEM_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-height'));

  // const exercisesFilterRedux = useSelector((state) => state.exercises.exercisesFilter); 
  const { exercisesFilter } = useExercise();

  const itemsPerPage = ITEMS_PER_ROW * ITEMS_PER_ROW;
  const totalPages = exercisesFilter ? Math.ceil(exercisesFilter.length / itemsPerPage) : 0; 
  const categoryLiClassName = (category) =>
    `${selectedCategory === category ? css.active : ''} ${css.sliderLi}`;

  const handlePageChange = (page) => {
    const newPage = Math.min(Math.max(1, page), totalPages);
    const newStartIndex = (newPage - 1) * itemsPerPage;

    if (newStartIndex < exercisesFilter.length) {
      setCurrentPage(newPage);
    }
  };

  const handleSubcategoryClick = (id) => {
    console.log(id);
    navigate(`${EXERCISES_ROUTE}/${id}`);
    // setSelectedSubcategoryLocal(subcategory);
    // setShowTitlePage(false);
    // dispatch(fetchExercisesFilter({ type: subcategory, page: 1, limit: 10 }));
  };

  const handleBackButtonClick = () => {
    setSelectedSubcategoryLocal(null);
    setShowTitlePage(true);
  };

  useEffect(() => {
    if (selectedCategory) {
      dispatch(
        fetchExercisesFilter({ type: selectedCategory, page: 1, limit: 10 })
      );
    }
  }, [dispatch, selectedCategory]);

  return (
    <div>
      {selectedSubcategory ? (
        <div className={css.categoryContainer}>
          <button
            type="button"
            onClick={handleBackButtonClick}
            className={css.backButton}
          >
            &#8592; Back
          </button>

          <h2 className={css.subCatH}>{selectedSubcategory}</h2>
          <ul className={css.categoryUl}>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={categoryLiClassName(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          {selectedSubcategory && <ExercisesList selectedSubcategory={selectedSubcategory} />}
        </div>
      ) : (
        <div>
          <ul className={css.sliderUl}>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={categoryLiClassName(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className={css.exercisesContainer}>
            {exercisesFilter &&
              exercisesFilter
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((exercise) => (
                  <div key={exercise.name} className={css.exerciseItem}>
                    <ExercisesSubcategoriesItem
                      exercise={exercise}
                      style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                      onClick={() => handleSubcategoryClick(exercise._id)}
                    />
                  </div>
                ))}
          </div>
          <div className={css.pagination}>
            {Array.from(
              { length: totalPages },
              (_, index) =>
                index * itemsPerPage < exercisesFilter.length && (
                  <span
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={
                      currentPage === index + 1
                        ? `${css.active} ${css.paginationDot} ${css.activeDot}`
                        : css.paginationDot
                    }
                  >
                    &bull;
                  </span>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExercisesSubcategoriesList;
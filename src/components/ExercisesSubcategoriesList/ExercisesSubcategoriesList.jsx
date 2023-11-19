import React, { useState, useEffect } from 'react';
import ExercisesSubcategoriesItem from '../../components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import ExercisesList from '../../components/ExercisesList/ExercisesList';
import css from './ExercisesSubcategoriesList.module.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchExercisesFilter } from '../../redux/exercises/exercisesOperations';

const ExercisesSubcategoriesList = ({ setShowTitlePage }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [selectedSubcategory, setSelectedSubcategoryLocal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_ROW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--items-per-row'));
  const ITEM_WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'));
  const ITEM_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-height'));

  const filteredExercises = useSelector((state) => state.exercises.filteredExercises);

  const itemsPerPage = ITEMS_PER_ROW * ITEMS_PER_ROW;
  const totalPages = filteredExercises ? Math.ceil(filteredExercises.length / itemsPerPage) : 0;

  const handlePageChange = (page) => {
    const newPage = Math.min(Math.max(1, page), totalPages);
    const newStartIndex = (newPage - 1) * itemsPerPage;

    if (newStartIndex < filteredExercises.length) {
      setCurrentPage(newPage);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategoryLocal(subcategory);
    setShowTitlePage(false);
    dispatch(fetchExercisesFilter({ type: subcategory, page: 1, limit: 10 }));
  };

  const handleBackButtonClick = () => {
    setSelectedSubcategoryLocal(null);
    setShowTitlePage(true);
  };

  useEffect(() => {
    if (selectedSubcategory) {
      dispatch(fetchExercisesFilter({ type: selectedSubcategory, page: 1, limit: 10 }));
    }
  }, [dispatch, selectedSubcategory]);


  return (
    <div>
      {selectedSubcategory ? (
        <div className={css.categoryContainer}>
          <button type="button" onClick={handleBackButtonClick} className={css.backButton}>
            &#8592; Back
          </button>
          
          <h2 className={css.subCatH}>{selectedSubcategory}</h2>
          <ul className={css.categoryUl}>
            <li onClick={() => setSelectedCategory('Body parts')} className={selectedCategory === 'Body parts' ? `${css.active} ${css.sliderLi}` : css.sliderLi}>
              Body Parts
            </li>
            <li onClick={() => setSelectedCategory('Equipment')} className={selectedCategory === 'Equipment' ? `${css.active} ${css.sliderLi}` : css.sliderLi}>
              Equipment
            </li>
            <li onClick={() => setSelectedCategory('Muscles')} className={selectedCategory === 'Muscles' ? `${css.active} ${css.sliderLi}` : css.sliderLi}>
              Muscles
            </li>
          </ul>
          <ExercisesList selectedSubcategory={selectedSubcategory} />
        </div>
      ) : (
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
          <div className={css.exercisesContainer}>
            {filteredExercises && filteredExercises.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((exercise) => (
              <div key={exercise.name} className={css.exerciseItem}>
                <ExercisesSubcategoriesItem
                  exercise={exercise}
                  style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                  onClick={() => handleSubcategoryClick(exercise.name)}
                />
              </div>
            ))}
          </div>
          <div className={css.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              index * itemsPerPage < filteredExercises.length && (
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
      )}
    </div>
  );
};


export default ExercisesSubcategoriesList;
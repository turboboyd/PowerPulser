import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import TitlePage from "../../components/TitlePage/TitlePage";
import BackLink from "components/BackLink/BackLink";
import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesItemType from "../../components/ExercisesItemType/ExercisesItemType";
import ExercisesPagination from "../../components/ExercisesPagination/ExercisesPagination";
import { ExercisesCategoryPage } from "pages";
import { EXERCISES_ROUTE } from "utils/const";
import css from './ExercisesPage.module.css'
import useExercise from "hooks/useExercise";
import Loader from "components/Loader/Loader";

const ExercisesPage = () => {
  const location = useLocation();
  const { exercisesIsLoading, exercisesPage } = useExercise();
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [path, setPath] = useState(EXERCISES_ROUTE);
  const [limit, setLimit] = useState();

  useEffect(() => {
    const currentPath = location.pathname
    setPath(currentPath)
  }, [location.pathname])
  
  const isEXERCISESPage = path === EXERCISES_ROUTE;

  return (
    <>
      { exercisesIsLoading && exercisesPage === 1 && <Loader />}
      {!isEXERCISESPage && <BackLink/>}
      <div className={css.wrapperTopLine}>
        <TitlePage title={isEXERCISESPage ? 'Exercises' : selectedCategory} />
        <ExercisesFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
          setPath={setPath}
        />
      </div>
      {isEXERCISESPage ? (
        <>
          <ExercisesItemType
            type={selectedCategory}
            page={currentPage}
            limit={limit}
            setLimit={setLimit}
          />
          <ExercisesPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            limit={limit}
          />
        </>
      ) : (
        <ExercisesCategoryPage />
      )}
    </>
  );
};

export default ExercisesPage;

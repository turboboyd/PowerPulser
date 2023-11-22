import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import css from './ExercisesPage.module.css'

import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesItemType from "../../components/ExercisesItemType/ExercisesItemType";
import ExercisesPagination from "../../components/ExercisesPagination/ExercisesPagination";
import { ExercisesCategoryPage } from "pages";
import { useLocation } from 'react-router-dom';
import { EXERCISES_ROUTE } from "utils/const";
import { useEffect } from "react";

const ExercisesPage = () => {
  const location = useLocation();
  
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [path, setPath] = useState(EXERCISES_ROUTE);
  const [limit, setLimit] = useState();

  useEffect(() => {
    const currentPath = location.pathname
    setPath(currentPath)
  },[location.pathname])
  
  const isEXERCISESPage = path === EXERCISES_ROUTE;

  return (
    <>
      <div className={css.wrapperTopLine}>
        <TitlePage title="Exercises" />
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

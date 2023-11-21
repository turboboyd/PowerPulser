import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import css from './ExercisesPage.module.css'

import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesItemType from "../../components/ExercisesItemType/ExercisesItemType";
import ExercisesPagination from "../../components/ExercisesPagination/ExercisesPagination";
import { ExercisesCategoryPage } from "pages";



import { Link, useLocation } from 'react-router-dom';
import { EXERCISES_ROUTE } from "utils/const";

const ExercisesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const [limit, setLimit] = useState()


    const location = useLocation();
    const isEXERCISESPage = location.pathname === EXERCISES_ROUTE;
    console.log('isEXERCISESPage: ', isEXERCISESPage);


  return (
    <>
      <div className={css.wrapperTopLine}>
        <TitlePage title="Exercises" />
        <ExercisesFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
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
            selectedCategory={selectedCategory}
            limit={limit}
          />
        </>
      ) : (
        <ExercisesCategoryPage setVisible={setVisible} />
      )}
    </>
  );
};

export default ExercisesPage;

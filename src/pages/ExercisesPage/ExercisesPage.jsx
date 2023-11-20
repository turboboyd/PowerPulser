import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import css from './ExercisesPage.module.css'

import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesItemType from "../../components/ExercisesItemType/ExercisesItemType";
import ExercisesPagination from "../../components/ExercisesPagination/ExercisesPagination";
import { PROFILE_ROUTE } from "../../utils/const";

const ExercisesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState()
  const { user } = useAuth();

  if (!user || user.profileSettings === null) {

    return <Navigate to={PROFILE_ROUTE} />;
  }
  return (
    <>
      <div className={css.wrapperTopLine}>
        <TitlePage title="Exercises" />
        <ExercisesFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setCurrentPage={setCurrentPage} />
      </div>
      <ExercisesItemType type={selectedCategory} page={currentPage} limit={limit} setLimit={setLimit} />
      <ExercisesPagination currentPage={currentPage} setCurrentPage={setCurrentPage} selectedCategory={selectedCategory} limit={limit} />
    </>
  );
};

export default ExercisesPage;

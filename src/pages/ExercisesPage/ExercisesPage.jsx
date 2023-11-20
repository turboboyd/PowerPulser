import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/const";

const ExercisesPage = () => {
  const [selectedSubcategory] = useState(null);
  const [showTitlePage, setShowTitlePage] = useState(true);
  const { isVerify, isAuthCheck, user, status } = useAuth();


  if (!user || user.profileSettings === null) {

    return <Navigate to={PROFILE_ROUTE} />;
  }
  return (
    <>
      {showTitlePage && <TitlePage title="Exercises" />}
      <ExercisesSubcategoriesList setShowTitlePage={setShowTitlePage} />
      {selectedSubcategory && (
        <div className={css.cardContainerBackground}>
          <ExercisesList selectedSubcategory={selectedSubcategory} />
        </div>
      )}
    </>
  );
};

export default ExercisesPage;

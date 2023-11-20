import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ExercisesPage = () => {
  const [selectedSubcategory] = useState(null);
  const [showTitlePage, setShowTitlePage] = useState(true);
  const { isVerify, isAuthCheck, user, status } = useAuth();
  console.log('status: ', status);
  
  console.log('user: ', user);

    const shouldRedirect = !isVerify && isAuthCheck;
    console.log('shouldRedirect: ', shouldRedirect);
  // if (!user) {
  //   return <Navigate to="/" />;
  // }

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

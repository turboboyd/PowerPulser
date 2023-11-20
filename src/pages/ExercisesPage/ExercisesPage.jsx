import React, { useState } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";


const ExercisesPage = () => {
  // const [selectedSubcategory] = useState(null);
  const [showTitlePage, setShowTitlePage] = useState(true);


  return (
    <>
      {/* {showTitlePage && <TitlePage title="Exercises" />} */}
      <ExercisesSubcategoriesList setShowTitlePage={setShowTitlePage} />
      {/* {selectedSubcategory && (
        <div className={css.cardContainerBackground}>
          <ExercisesList selectedSubcategory={selectedSubcategory} />
        </div>
      )} */}
    </>
  );
};

export default ExercisesPage;

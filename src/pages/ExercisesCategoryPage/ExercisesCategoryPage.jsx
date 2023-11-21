import React from "react";
import { Navigate, useParams } from "react-router-dom";
// import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import TitlePage from "../../components/TitlePage/TitlePage";


function ExercisesCategoryPage({setVisible}) {
  const { id } = useParams();
  id ?? setVisible(false)
  return (
    <>
      <ExercisesList id={id} />
    </>
  );
};

export default ExercisesCategoryPage
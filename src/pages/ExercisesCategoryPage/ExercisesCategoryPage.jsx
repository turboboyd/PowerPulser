import React from "react";
import { useParams } from "react-router-dom";
import ExercisesList from "../../components/ExercisesList/ExercisesList";

function ExercisesCategoryPage() {
  const { id } = useParams();

  return (
    <>
      <ExercisesList id={id} />
    </>
  );
};

export default ExercisesCategoryPage
import React from "react";
import { useParams } from "react-router-dom";
// import ExercisesFilter from "../../components/ExercisesFilter/ExercisesFilter";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import TitlePage from "../../components/TitlePage/TitlePage";


function ExercisesCategoryPage() {
  const { id } = useParams();
//  console.log(id )
  return (
    <>
      <div>
        <TitlePage title="Exercises" />
        {/* <ExercisesFilter/> */}
      </div>
      <ExercisesList id={id} />
    </>
  );
};

export default ExercisesCategoryPage
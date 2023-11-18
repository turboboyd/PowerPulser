import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";

import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";


const ExercisesPage = () => {
  return (
    <>
      <TitlePage title="Exercises" />
      <ExercisesSubcategoriesList />
      <div className={css.cardContainerBackground}>
        <ExercisesList />
      </div>
    </>
  );
};

export default ExercisesPage;

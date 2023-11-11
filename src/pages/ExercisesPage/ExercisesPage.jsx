import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import WaistBackgroundImage from "../../components/BackgroundImage/Waist/WaistBackgroundImage";

import css from "./../../components/ExercisesList/ExercisesList.module.css";

const ExercisesPage = () => {
  return (
    <>
      <TitlePage title="Exercises" />
      <div className={css.cardContainerBackground}>
        <ExercisesList />
      </div>
      <WaistBackgroundImage />
    </>
  );
};

export default ExercisesPage;

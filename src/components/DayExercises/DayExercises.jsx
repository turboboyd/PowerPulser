import css from "./DayExercises.module.css";
import useDiary from "../../hooks/useDiary";

import { EXERCISES_ROUTE } from "../../utils/const";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import ExercisesTable from "../ExercisesTable/ExercisesTable";
import EmptyList from "../EmptyList/EmptyList";

const DayExercises = () => {
  const { diaryExercises } = useDiary();

  return (
    <>
      <div className={css.dayExecrcises}>
        <div className={css.dayScrollWrap}>
          <div className={css.diaryNav}>
            <h3 className={css.diarySubtitle}>Execrcises</h3>
            <ButtonAddItem
              titleLink="Add exercise"
              titleRoute={EXERCISES_ROUTE}
            />
          </div>
          {diaryExercises.length === 0 ? (
            <EmptyList listName={"exercises"} />
          ) : (
            <ExercisesTable exercises={diaryExercises} />
          )}
        </div>
      </div>
    </>
  );
};

export default DayExercises;

import css from "./DayExercises.module.css";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import { EXERCISES_ROUTE } from "../../utils/const";
import ExercisesTable from "../ExercisesTable/ExercisesTable";
import { useSelector } from "react-redux";
import { selectDiaryExercises } from "../../redux/diary/diarySelectors";

const DayExercises = () => {
  const execrcises = useSelector(selectDiaryExercises);

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
          {execrcises.length === 0 ? (
            <div className={css.notFoundPlugTextWrap}>
              <p className={css.notFoundPlugText}>Not found exercises</p>
            </div>
          ) : (
            <ExercisesTable execrcises={execrcises} />
          )}
        </div>
      </div>
    </>
  );
};

export default DayExercises;

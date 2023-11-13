import React from "react";

import css from "./DayExercises.module.css";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import { EXERCISES_ROUTE } from "../../utils/const";
import ExecrcisesTable from "../ExercisesTable/ExercisesTable";

import execrcisesData from "../../RESOURCES/resources/exercises.json";
import ET from "../ET/ET";

const execrcises = execrcisesData.slice(0, 3);

const DayExercises = () => {
  return (
    <>
      <div className={css.dayExecrcises}>
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
          <ExecrcisesTable execrcises={execrcises} />
          // <ET execrcises={execrcises} />
        )}
      </div>
    </>
  );
};

export default DayExercises;

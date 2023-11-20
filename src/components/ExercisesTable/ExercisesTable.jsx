import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import css from "./ExercisesTable.module.css";

import Icon from "../ComponIcon/Icon";
import { deleteExercisesDiary } from "../../redux/diary/diaryOperations";

const ExercisesTable = ({ execrcises }) => {
  const dispatch = useDispatch();

  const deleteExercise = (id) => {
    dispatch(deleteExercisesDiary(id));
  };

  return (
    <>
      <ul className={css.diaryMainList}>
        {execrcises.map(
          ({
            _id,
            bodyPart,
            equipment,
            name,
            target,
            burnedCalories,
            time,
          }) => (
            <li key={_id} className={css.diaryMainItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Body Part</th>
                    <td className={css.nameValue}>{bodyPart}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Equipment</th>
                    <td className={css.nameValue}>{equipment}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Name</th>
                    <td className={css.nameValue}>{name}</td>
                  </tr>
                </tbody>
                <tbody className={css.elementWrap}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Target</th>
                    <td className={css.nameValue}>{target}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Burned Calories</th>
                    <td className={css.nameValue}>{burnedCalories}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Time</th>
                    <td className={css.nameValue}>{time}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={`${css.nameCategory} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td
                      className={css.trashValue}
                      onClick={() => {
                        dispatch(deleteExercise(_id));
                      }}
                    >
                      <Icon className={css.trashImg} iconId={"Trash"} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          )
        )}
      </ul>
    </>
  );
};

ExercisesTable.propTypes = {
  execrcises: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bodyPart: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      burnedCalories: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ExercisesTable;

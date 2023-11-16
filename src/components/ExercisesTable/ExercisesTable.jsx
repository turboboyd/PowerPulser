import css from "./ExercisesTable.module.css";

import Icon from "../ComponIcon/Icon";

const ExercisesTable = ({ execrcises }) => {
  return (
    <>
      <ul className={css.diaryMainList}>
        {execrcises.map(
          ({ bodyPart, equipment, name, target, burnedCalories, time }) => (
            <li key={name} className={css.diaryMainItem}>
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
                    <td className={css.trashValue}>
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

export default ExercisesTable;

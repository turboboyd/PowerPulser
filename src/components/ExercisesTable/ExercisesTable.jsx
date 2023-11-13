import css from "./ExercisesTable.module.css";
import widthCss from "./ExercisesTableWidth.module.css";

import Icon from "../ComponIcon/Icon";

const ExercisesTable = ({ execrcises }) => {
  return (
    <>
      <ul className={css.diaryMainList}>
        {execrcises.map(
          ({ bodyPart, equipment, name, target, burnedCalories, time }) => (
            <li key={name} className={css.diaryMainItem}>
              <ul className={css.diaryDetailsList}>
                <li className={css.diaryDetailsItem}>
                  <span className={css.diaryDetailsItemCategory}>
                    Body Part
                  </span>
                  <div
                    className={`${css.diaryDetailsItemValue} ${widthCss.widthBody}`}
                  >
                    {bodyPart}
                  </div>
                </li>
                <li className={css.diaryDetailsItem}>
                  <span className={css.diaryDetailsItemCategory}>
                    Equipment
                  </span>
                  <div
                    className={`${css.diaryDetailsItemValue} ${widthCss.widthEquipment}`}
                  >
                    {equipment}
                  </div>
                </li>
                <li className={css.diaryDetailsItem}>
                  <span className={css.diaryDetailsItemCategory}>Name</span>
                  <div
                    className={`${css.diaryDetailsItemValue} ${widthCss.widthName}`}
                  >
                    {name}
                  </div>
                </li>
                <li className={css.diaryDetailsItem}>
                  <ul className={`${css.diaryDetailsListMob}`}>
                    <li className={css.diaryDetailsItemMob}>
                      <span className={css.diaryDetailsItemCategory}>
                        Target
                      </span>
                      <div
                        className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob} ${widthCss.widthTarget}`}
                      >
                        {target}
                      </div>
                    </li>
                    <li className={css.diaryDetailsItemMob}>
                      <span className={css.diaryDetailsItemCategory}>
                        Burned Calories
                      </span>
                      <div
                        className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob} ${widthCss.widthBurned}`}
                      >
                        {burnedCalories}
                      </div>
                    </li>
                    <li className={css.diaryDetailsItemMob}>
                      <span className={css.diaryDetailsItemCategory}>Time</span>
                      <div className={css.diaryTrashWrap}>
                        <div
                          className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob} ${widthCss.widthTime}`}
                        >
                          {time}
                        </div>
                        <button>
                          <Icon className={css.trashImg} iconId={"Trash"} />
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ExercisesTable;

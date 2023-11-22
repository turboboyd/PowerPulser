import { useDispatch } from 'react-redux';
import css from './ExercisesTable.module.css';
import capitalizedWord from 'utils/capitalizedWord';
import PropTypes from 'prop-types';

import Icon from '../ComponIcon/Icon';
import { deleteExercisesDiary } from '../../redux/diary/diaryOperations';

const ExercisesTable = ({ execrcises }) => {
  const dispatch = useDispatch();

  const deleteExercise = id => {
    dispatch(deleteExercisesDiary(id));
  };

  return (
    <>
      <ul className={css.diaryMainList}>
        {execrcises.map(
          ({ _id, bodyPart, equipment, name, target, calories, time }) => (
            <li key={_id} className={css.diaryMainItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Body Part</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(bodyPart)}
                    </td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Equipment</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(equipment)}
                    </td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Name</th>
                    <td className={css.nameValue}>{capitalizedWord(name)}</td>
                  </tr>
                </tbody>
                <tbody className={css.elementWrap}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Target</th>
                    <td className={css.nameValue}>{capitalizedWord(target)}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Burned Calories</th>
                    <td className={css.nameValue}>{calories}</td>
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
                        deleteExercise(_id);
                      }}
                    >
                      <Icon className={css.trashImg} iconId={'Trash'} />
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
  execrcises: PropTypes.array.isRequired,
};

export default ExercisesTable;

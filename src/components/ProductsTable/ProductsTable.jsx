import { useDispatch } from 'react-redux';
import Icon from '../ComponIcon/Icon';
import css from './ProductsTable.module.css';
import { deleteProductDiary } from '../../redux/diary/diaryOperations';
import capitalizedWord from 'utils/capitalizedWord';
import PropTypes from 'prop-types';

const ProductsTable = ({ products }) => {
  const dispatch = useDispatch();

  const deleteProduct = id => {
    dispatch(deleteProductDiary(id));
  };

  return (
    <ul className={css.diaryMainList}>
      {products.map(
        ({ _id, title, category, calories, amount, recommended }, i) => {
          return (
            <li key={_id} className={css.diaryMainItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Title</th>
                    <td className={css.nameValue}>{capitalizedWord(title)}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Category</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(category)}
                    </td>
                  </tr>
                </tbody>
                <tbody className={css.elementWrap}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Calories</th>
                    <td className={css.nameValue}>{calories}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Weight</th>
                    <td className={css.nameValue}>{amount}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Recommend</th>
                    <td className={css.nameValue}>
                      <div className={`${css.recommendWrap}`}>
                        <span
                          className={
                            recommended
                              ? `${css.productRecommend}`
                              : `${css.productNotRecommend}`
                          }
                        ></span>
                        {recommended ? 'Yes' : 'No'}
                      </div>
                    </td>
                  </tr>
                  <tr className={css.element}>
                    <th className={`${css.nameCategory} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td
                      className={css.trashValue}
                      onClick={() => {
                        deleteProduct(_id);
                      }}
                    >
                      <Icon className={css.trashImg} iconId={'Trash'} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        }
      )}
    </ul>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;

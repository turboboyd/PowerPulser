import Icon from "../ComponIcon/Icon";
import css from "./ProductsTable.module.css";

const ProductsTable = ({ products }) => {
  return (
    <>
      <ul className={css.diaryMainList}>
        {products.map(({ title, category, calories, weight }) => (
          <li key={title} className={css.diaryMainItem}>
            <table className={css.table}>
              <tbody className={css.bodyTable}>
                <tr className={css.element}>
                  <th className={css.nameCategory}>Title</th>
                  <td className={css.nameValue}>{title}</td>
                </tr>
                <tr className={css.element}>
                  <th className={css.nameCategory}>Category</th>
                  <td className={css.nameValue}>{category}</td>
                </tr>
              </tbody>
              <tbody className={css.elementWrap}>
                <tr className={css.element}>
                  <th className={css.nameCategory}>Calories</th>
                  <td className={css.nameValue}>{calories}</td>
                </tr>
                <tr className={css.element}>
                  <th className={css.nameCategory}>Weight</th>
                  <td className={css.nameValue}>{weight}</td>
                </tr>
                <tr className={css.element}>
                  <th className={css.nameCategory}>Recommend</th>
                  <td className={css.nameValue}>
                    <div className={`${css.recommendWrap}`}>
                      <span className={css.productRecommend}></span>
                      Yes
                    </div>
                  </td>
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
        ))}
      </ul>
    </>
  );
};

export default ProductsTable;

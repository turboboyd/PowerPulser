import css from "./ProductsTable.module.css";
import widthCss from "./ProductsTableWidth.module.css";

import Icon from "../ComponIcon/Icon";

const ProductsTable = ({ products }) => {
  return (
    <>
      <ul className={css.diaryMainList}>
        {products.map(({ title, category, calories, weight }) => (
          <li key={title} className={css.diaryMainItem}>
            <ul className={css.diaryDetailsList}>
              <li className={css.diaryDetailsItem}>
                <span className={css.diaryDetailsItemCategory}>Title</span>
                <div
                  className={`${css.diaryDetailsItemValue} ${widthCss.widthTitle}`}
                >
                  {title}
                </div>
              </li>
              <li className={css.diaryDetailsItem}>
                <span className={css.diaryDetailsItemCategory}>Category</span>
                <div
                  className={`${css.diaryDetailsItemValue} ${widthCss.widthCategory}`}
                >
                  {category}
                </div>
              </li>
              <li className={css.diaryDetailsItem}>
                <ul className={`${css.diaryDetailsListMob}`}>
                  <li className={css.diaryDetailsItemMob}>
                    <span className={css.diaryDetailsItemCategory}>
                      Calories
                    </span>
                    <div
                      className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob} ${widthCss.widthCalories}`}
                    >
                      {calories}
                    </div>
                  </li>
                  <li className={css.diaryDetailsItemMob}>
                    <span className={css.diaryDetailsItemCategory}>Weight</span>
                    <div
                      className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob} ${widthCss.widthWeight}`}
                    >
                      {weight}
                    </div>
                  </li>
                  <li className={css.diaryDetailsItemMob}>
                    <span className={css.diaryDetailsItemCategory}>
                      Recommend
                    </span>
                    <div className={css.diaryTrashWrap}>
                      <div
                        className={`${css.diaryDetailsItemValue} ${css.diaryDetailsWrapValueMob}`}
                      >
                        <div
                          className={`${css.diaryProductRecommendWrap}  ${widthCss.widthRecommend}`}
                        >
                          <span className={css.diaryProductRecommend}></span>
                          Yes
                        </div>
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
        ))}
      </ul>
    </>
  );
};

export default ProductsTable;

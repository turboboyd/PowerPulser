import Icon from '../ComponIcon/Icon'

import css from './../ExercisesItem/ExercisesItem.module.css'

const ProductsItem = ({ product }) => {
  const isAllowed = true

  return (
    <div className={css.exerciseWrapper}>
      <div className={css.productsCardTopPart}>
        <p className={css.exerciseCardTopDiet}>diet</p>
        {isAllowed ? (
          <div className={css.productRecommended}>
            <p className={css.productRecommendedTrue}></p>
            <p>Recommended</p>
          </div>
        ) : (
          <div className={css.productRecommended}>
            <p className={css.productRecommendedFalse}></p>
            <p>Not recommended</p>
          </div>
        )}
        <button className={css.exerciseArrow}>
          Add
          <Icon className={css.exerciseArrowSvg} iconId="Arrow" />
        </button>
      </div>
      <div className={css.exerciseName}>
        <Icon className={css.exerciseManSvg} iconId="Runner" />
        <h3 className={css.exerciseNameText}>{product.title}</h3>
      </div>
      <ul className={css.exerciseCardLowPart}>
        <li>
          Calories:
          <span>{product.calories}</span>
        </li>
        <li>
          Category:
          <span className={css.exerciseCardItem}>{product.category}</span>
        </li>
        <li>
          Weight:
          <span className={css.exerciseCardItem}>{product.weight}</span>
        </li>
      </ul>
    </div>
  )
}
export default ProductsItem

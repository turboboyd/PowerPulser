import css from './AddProductSuccess.module.css';
import foodIcon from '../../../images/foodIcon.png';
import { NavLink } from 'react-router-dom';
import { DIARY_ROUTE } from '../../../utils/const';
import Icon from '../../ComponIcon/Icon';
import sprite from '../../../images/svg/InlineSprite.svg';

const product = {
  _id: {
    $oid: '5d51694802b2373622ff56d4',
  },
  date: '01/01/2023',
  amount: 100,
  calories: 369,
};

const AddProductSuccess = ({ handleModalSuccessToggle }) => {
  const handleToProduct = () => {
    handleModalSuccessToggle();
  };

  return (
    <div className={css.container}>
      <img className={css.image} src={foodIcon} alt="Avocado icon" />
      <strong className={css.title}>Well done</strong>
      <p className={css.text}>
        Calories: <span className={css.textCalories}>{product.calories}</span>
      </p>

      <button
        className={css.button}
        //   disabled={amount > 0 ? false : true}
        type="button"
        onClick={handleToProduct}
      >
        Next product
      </button>
      <div className={css.linkWrapper}>
        <NavLink to={DIARY_ROUTE} className={css.link}>
          To the diary
        </NavLink>
        <Icon className={css.iconArrow} iconId="Arrow" sprite={sprite} />
      </div>
    </div>
  );
};

export default AddProductSuccess;

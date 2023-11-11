import { useState } from 'react';
import css from './AddProductForm.module.css';

const product = {
  _id: {
    $oid: '5d51694802b2373622ff56d4',
  },
  weight: 100,
  calories: 369,
  category: 'flour',
  title: 'Dietary oatmeal flour',
  groupBloodNotAllowed: {
    1: true,
    2: false,
    3: false,
    4: false,
  },
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const AddProductForm = ({ handleModalToggle }) => {
  const [amount, setAmount] = useState('');

  const handleAmountGrams = (element) => setAmount(element.target.value);
  const calories = Math.round((amount * product.calories) / 100);
  let date = new Date();
  const formattedDate = formatDate(date);
  const productToDiary = {
    id: product.id,
    date: formattedDate,
    amount,
    calories,
  };
  const handleAddToDiary = () => {
    console.log(productToDiary);
    handleModalToggle();
  };

  return (
    <div className={css.container}>
      <form>
        <div className={css.inputContainer}>
          <label htmlFor="title">
            <input
              className={css.inputProduct}
              id="title"
              type="text"
              value={product.title}
              disabled
            />
          </label>

          <input
            className={css.inputGrams}
            id="grams"
            type="text"
            value={amount}
            placeholder="grams"
            onChange={handleAmountGrams}
          />
          <label htmlFor="grams"></label>
        </div>
        <p className={css.text}>
          Calories: <span className={css.textCalories}>{calories}</span>
        </p>
        <div className={css.buttonWrapper}>
          <button
            className={css.button}
            disabled={amount > 0 ? false : true}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
          <button
            className={css.button2}
            type="button"
            onClick={handleModalToggle}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

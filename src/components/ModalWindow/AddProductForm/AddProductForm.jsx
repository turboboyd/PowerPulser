import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useDiary from '../../../hooks/useDiary';
import css from './AddProductForm.module.css';
import formatDate from '../../../utils/formatData';
import { addProductDiary } from '../../../redux/diary/diaryOperations';

const AddProductForm = ({
  product,
  handleModalProduct,
  handleModalSuccess,
  handleSelectedProduct,
}) => {
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const { diaryError } = useDiary();

  const handleAmountGrams = (element) => setAmount(element.target.value);
  const calories = Math.round((amount * product.calories) / 100);
  let date = new Date();
  const formattedDate = formatDate(date);
  const productToDiary = {
    date: formattedDate,
    product: product._id,
    amount,
    calories,
  };
  const handleAddToDiary = () => {
    dispatch(addProductDiary(productToDiary));

    if (diaryError) {
      console.log('Server error. Try again later');
    } else {
      handleModalProduct();
      handleModalSuccess();
      handleSelectedProduct(productToDiary);
    }
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
            type="submit"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
          <button
            className={css.button2}
            type="button"
            onClick={handleModalProduct}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

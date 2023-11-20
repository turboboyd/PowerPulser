import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useDiary from '../../../hooks/useDiary';
import css from './AddProductForm.module.css';
import formatDate from '../../../utils/formatData';
import { addProductDiary } from '../../../redux/diary/diaryOperations';
import { Formik, Form, Field } from 'formik';
import InputShema from '../../../utils/shemas/InputShema';

const AddProductForm = ({
  product,
  handleModalProduct,
  handleModalSuccess,
  handleSelectedProduct,
}) => {
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const { diaryError } = useDiary();

  const initialValues = {
    title: '',
    grams: '',
  };

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
  const handleAddToDiary = async () => {
    dispatch(addProductDiary(productToDiary));
    if (diaryError) {
      console.log('Server error. Try again later');
    } else {
      await handleModalProduct();
      await handleModalSuccess();
      await handleSelectedProduct(productToDiary);
    }
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={InputShema}
        onSubmit={handleAddToDiary}
      >
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor="title">
              <Field
                type="text"
                name="title"
                className={css.button}
                disabled={amount > 0 ? false : true}
              />
            </label>
            <Field type="number" name="grams" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* <form>
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
            type="number"
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
      </form> */}
    </div>
  );
};

export default AddProductForm;

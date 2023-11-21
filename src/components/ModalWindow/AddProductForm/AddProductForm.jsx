import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useDiary from '../../../hooks/useDiary';
import css from './AddProductForm.module.css';
import formatDate from '../../../utils/formatData';
import { addProductDiary } from '../../../redux/diary/diaryOperations';
import InputShema from '../../../utils/shemas/InputShema';
import capitalizedWord from 'utils/capitalizedWord';

const AddProductForm = ({
  product,
  handleModalProduct,
  handleModalSuccess,
  handleSelectedProduct,
}) => {
  const dispatch = useDispatch();
  const { diaryError } = useDiary();

  const initialValues = {
    amount: '',
  };

  const calculateCalories = amount =>
    Math.round((amount * product.calories) / 100);

  const formattedDate = formatDate(new Date());

  const handleAddToDiary = values => {
    const productToDiary = {
      date: formattedDate,
      product: product._id,
      amount: values.amount,
      calories: calculateCalories(values.amount),
    };

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
      <Formik
        initialValues={initialValues}
        validationSchema={InputShema}
        onSubmit={handleAddToDiary}
      >
        {formik => (
          <Form>
            <div className={css.inputContainer}>
              <label htmlFor="title">
                <Field
                  className={css.inputProduct}
                  id="title"
                  type="text"
                  name="title"
                  value={capitalizedWord(product.title)}
                  disabled
                />
              </label>

              <Field
                className={css.inputGrams}
                id="grams"
                type="text"
                name="amount"
                placeholder="grams"
              />
            </div>
            <p className={css.text}>
              Calories:{' '}
              <span className={css.textCalories}>
                <Field name="amount">
                  {({ field }) => calculateCalories(field.value)}
                </Field>
              </span>
            </p>
            <div className={css.buttonWrapper}>
              <button
                className={css.button}
                type="submit"
                disabled={!formik.isValid}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddProductForm.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  handleModalProduct: PropTypes.func.isRequired,
  handleModalSuccess: PropTypes.func.isRequired,
  handleSelectedProduct: PropTypes.func.isRequired,
};

export default AddProductForm;

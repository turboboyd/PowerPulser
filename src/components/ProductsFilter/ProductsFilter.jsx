import sprite from '../../images/svg/InlineSprite.svg';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts ,fetchProductsCategory  } from '../../redux/products/productsOperations';
import styles from './ProductsFilter.module.css';
import { selectProductsCategory } from '../../redux/products/productsSelectors';
import { useFormik } from 'formik';
import useProduct from '../../hooks/useProduct';
import { setFilters, setItems } from '../../redux/products/productsSlice';
import useAuth from '../../hooks/useAuth';


const ProductsFilter = () => {
  const dispatch = useDispatch();
  const { category } = useProduct();
  const { user } = useAuth()
  const formik = useFormik({
    initialValues: { title: '', category: '', recommended: '' },
    onSubmit: values => handleSubmit(values),
  });
  // Загрузка категорий при монтировании компонента
  useEffect(() => {
    dispatch(fetchProductsCategory());
  }, [dispatch]);

  // Обработка отправки формы
  const handleSubmit = (values = formik.values) => {
    const { initialValues } = formik;

    // Фильтрация значений, которые изменились
    const filledValues = Object.entries(values).filter(
      ([key, value]) => value !== initialValues[key]
    );

    // Создание объекта для отправки на сервер
    const filterParams = Object.fromEntries(filledValues);
    dispatch(setItems());
    dispatch(setFilters(filterParams))
    // Вызов экшена для загрузки продуктов с учетом фильтров
    // dispatch(fetchProducts({filterParams}));
  };

  // Обработка изменения значения полей формы
  const handleChange = e => {
    formik.handleChange(e);
    const { initialValues, values } = formik;

    // Если значение поля изменилось, подготовить данные и выполнить отправку формы
    if (e.target.value !== initialValues[e.target.value]) {
      const prePayload = { ...values, [e.target.name]: e.target.value };
      handleSubmit(prePayload);
    }
  };

  return (
    <>
      <form className={styles.prodFilterForm} onSubmit={formik.handleSubmit}>
        <div className={styles.prodFilterSearchBox}>
          <input
            className={styles.prodFilterSearchField}
            type="search"
            name="title"
            placeholder="Search"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.initialValues.title !== formik.values.title && (
            <button
              className={styles.prodSearchCancelBtn}
              type="button"
              onClick={() => {
                formik.setFieldValue('title', '');
                formik.handleSubmit();
              }}
            >
              <svg className={styles.prodSearchIcon }>
                <use href={`${sprite}#Close`}></use>
              </svg>
            </button>
          )}
          <button className={styles.prodSearchSubmitBtn} type="submit">
            <svg className={styles.prodSearchIcon}>
              <use href={`${sprite}#Search`}></use>
            </svg>
          </button>
        </div>

        <div className={styles.prodFilterSelectsWrapper}>
          <select
            className={styles.prodFilterCategorySlct}
            name="category"
            value={formik.values.category}
            onChange={handleChange}
          >
            <option value="">Categories</option>
            {category.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className={styles.prodFilterRecSlct}
            name="recommended"
            value={formik.values.recommended}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value={true}>Recommended</option>
            <option value={false}>Not recommended</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ProductsFilter;
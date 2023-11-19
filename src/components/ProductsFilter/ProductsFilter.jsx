import sprite from '../../images/svg/InlineSprite.svg';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsCategory  } from '../../redux/products/productsOperations';
import styles from './ProductsFilter.module.css';

import { useFormik } from 'formik';
import useProduct from '../../hooks/useProduct';
import { setFilters, setItems } from '../../redux/products/productsSlice';


const ProductsFilter = () => {
  const dispatch = useDispatch();

  const { category, filters } = useProduct();
  
  const formik = useFormik({
    initialValues: { search: filters.search, category: filters.category, recommended: filters.recommended },
    onSubmit: values => handleSubmit(values),
  });
  // Загрузка категорий при монтировании компонента
  useEffect(() => {
    dispatch(fetchProductsCategory());
  }, [dispatch]);


  const handleSubmit = (paramsSearch) => {
    dispatch(setItems());
    dispatch(setFilters({ page: 1, ...paramsSearch }))
  };

  const handleChange = e => {
    formik.handleChange(e);
    const { initialValues, values } = formik;

    if (e.target.value !== initialValues[e.target.value]) {
      const paramsSearch = { ...values, [e.target.name]: e.target.value };
      handleSubmit(paramsSearch);
    }
  };

  return (
    <>
      <form className={styles.prodFilterForm} onSubmit={formik.handleSubmit}>
        <div className={styles.prodFilterSearchBox}>
          <input
            className={styles.prodFilterSearchField}
            type="search"
            name="search"
            placeholder="Search"
            value={formik.values.search}
            onChange={formik.handleChange}
          />
          {formik.initialValues.search !== formik.values.search && (
            <button
              className={styles.prodSearchCancelBtn}
              type="button"
              onClick={() => {
                formik.setFieldValue('search', '');
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
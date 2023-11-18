import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import sprite from '../../images/svg/InlineSprite.svg';
import { setFilter } from '../../redux/products/productsSlice';
import styles from './ProductsFilter.module.css';
import { Formik, Form, Field } from 'formik';
import customStyles from './ProductFilterSelectStyles'
import capitalizedWord from '../../utils/capitalizedWord'

// Опции для селекторов
const optionsRec = [
  { value: 'all', label: 'All' },
  { value: true, label: 'Recommended' },
  { value: false, label: 'Not recommended' },
];

// Категории продуктов
const categories = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];


// Преобразование категорий для селектора
const categoriesList = categories?.map((el) => ({
  value: el,
  label: capitalizedWord(el),
}));


// Компонент ProductsFilter
const ProductsFilter = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(optionsRec[0]);

  


  return (
    <Formik
  initialValues={{
    search: '',
    category: categoriesList[0],
    recommended: optionsRec[0],
  }}
  onSubmit={(values) => {
    // Обработка отправки формы
  }}
>
  {(formik) => (
    <Form>
      <ul className={styles['products-filter-list']}>
        {/* Поиск */}
        <li>
          <label className={styles['products-filter-label']}>
            <Field
              name="search"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Search"
                  className={styles['products-filter-search']}
                  value={formik.values.search}
                  onChange={(event) => formik.handleChange(event)}
                />
              )}
            />
            {/* Кнопка для закрытия поиска */}
            {formik.values.search.length > 0 && (
              <button
                className={styles['products-btn-clouse']}
                onClick={() => formik.setFieldValue('search', '')}
                type="button"
              >
                <svg className={styles['products-svg-clouse']}>
                  <use href={`${sprite}#Close`}></use>
                </svg>
              </button>
            )}
            {/* Кнопка для запуска поиска */}
            <button
              className={styles['products-btn-search']}
              type="submit"
            >
              <svg className={styles['products-svg-search']}>
                <use href={`${sprite}#Search`}></use>
              </svg>
            </button>
          </label>
        </li>

        {/* Выбор категории */}
        <li>
          <div className={styles['select-wrapper']}>
            <Select
              className={styles['select-wrapper']}
              styles={customStyles}
              value={formik.values.category}
              onChange={(event) => formik.setFieldValue('category', event)}
              placeholder="Categories"
              options={categoriesList || []}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)',
                  primary: 'transparent',
                  neutral40: '#EFEDE8',
                  neutral20: 'transparent',
                  neutral30: 'transparent',
                  neutral50: 'rgba(239, 237, 232, 1)',
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
            />
          </div>
        </li>

        {/* Выбор рекомендаций */}
        <li>
          <div className={styles['select-wrapper']}>
            <Select
              className={styles['select-wrapper']}
              onChange={(event) => formik.setFieldValue('recommended', event)}
              styles={customStyles}
              value={formik.values.recommended}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)',
                  primary: 'transparent',
                  neutral40: '#EFEDE8',
                  neutral20: 'transparent',
                  neutral30: 'transparent',
                  neutral50: 'rgba(239, 237, 232, 1)',
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
              options={optionsRec}
            />
          </div>
        </li>
      </ul>
    </Form>
  )}
</Formik>
  );
};

export default ProductsFilter;

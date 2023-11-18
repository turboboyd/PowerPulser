import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import sprite from '../../images/svg/InlineSprite.svg';
import { setFilter } from '../../redux/products/productsSlice';
import styles from './ProductsFilter.module.css';
import { Formik, Form, Field } from 'formik';
import customStyles from './ProductFilterSelectStyles'

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

// Функция для преобразования первой буквы в верхний регистр
const capitalizeFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

// Преобразование категорий для селектора
const categoriesList = categories?.map((el) => ({
  value: el,
  label: capitalizeFirstLetter(el),
}));

// Стили для компонентов Select



// Компонент ProductsFilter
const ProductsFilter = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(optionsRec[0]);

  // Обработчик изменения ввода для поиска
  const onChangeSearch = (event, setFieldValue) => {
    const text = event.target.value;
    setSearch(text);
    setFieldValue('search', text);
    dispatch(
      setFilter({
        search: text,
        category: category.value,
        recommended: recommended.value,
        page: 1,
        limit: 20,
      }),
    );
  };

  // Обработчик изменения категории
  const onCategoriesChange = (event, setFieldValue) => {
    setCategory(event);
    setFieldValue('category', event.value);
    dispatch(
      setFilter({
        category: event.value,
        search,
        recommended: recommended.value,
      }),
    );
  };

  // Обработчик изменения рекомендаций
  const onRecommendedChange = (event, setFieldValue) => {
    setRecommended(event);
    setFieldValue('recommended', event.value);
    dispatch(
      setFilter({
        recommended: event.value,
        search,
        category: category.value,
      }),
    );
  };

  // Обработчик удаления текста из поля поиска
  const delTextInput = (setFieldValue) => {
    setSearch('');
    setFieldValue('search', '');
    dispatch(
      setFilter({
        search: '',
        category: category.value,
        recommended: recommended.value,
      }),
    );
  };

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
      {({ values, setFieldValue }) => (
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
                      value={search}
                      onChange={(event) => onChangeSearch(event, setFieldValue)}
                    />
                  )}
                />
                {/* Кнопка для закрытия поиска */}
                {values.search.length > 0 && (
                  <button
                    className={styles['products-btn-clouse']}
                    onClick={() => delTextInput(setFieldValue)}
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
                  value={category}
                  onChange={(event) => onCategoriesChange(event, setFieldValue)}
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
                  onChange={(event) =>
                    onRecommendedChange(event, setFieldValue)
                  }
                  styles={customStyles}
                  value={recommended}
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

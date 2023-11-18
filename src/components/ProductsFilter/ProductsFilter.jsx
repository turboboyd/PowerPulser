import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import sprite from '../../images/svg/InlineSprite.svg';
import styles from './ProductsFilter.module.css';
import { Formik, Form, Field } from 'formik';
import customStyles from './ProductFilterSelectStyles';
import capitalizedWord from '../../utils/capitalizedWord';
import selectProductsCategory from '../../redux/products/productsSelectors';
import { fetchProducts } from '../../redux/products/productsOperations';

// Опции для селекторов
const options = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Recommended ' },
  { value: 'false', label: 'Not recommended' },
];

// Категории продуктов
// const categories = useSelector(selectCategoriesProducts);



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


// Компонент ProductsFilter
const ProductsFilter = () => {
    // Получение диспетчера Redux
  const dispatch = useDispatch();

    // Состояния для хранения значения поиска, выбранной категории и выбранной рекомендации
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(options[0]);

  // const categories = useSelector(selectProductsCategory);

 // Эффект, который отправляет запрос на получение продуктов при изменении рекомендации, категории или поискового запроса
  useEffect(() => {
    dispatch(
      fetchProducts({
        recommended: recommended.value,
        category: category.value,
        search,
      }),
    );
  }, [recommended, category, search, dispatch]);

 // Формирование списка категорий для селектора
 const categoriesList = categories?.map((el) => ({
  value: el,
  label: capitalizedWord(el),
}));

  // Обработчик отправки формы поиска
const handleSubmit = (e) => {
  e.preventDefault();
  const searchValue = e.target.elements[0].value;
  setSearch(searchValue);
};


return (
  <Formik
initialValues={{
  search: '',
  category: categoriesList[0],
  recommended: options[0],
}}
onSubmit={(values) => {
  // Обработка отправки формы
}}
>
{(formik) => (
  <Form onSubmit={handleSubmit}>
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
            options={options}
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

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import sprite from '../../../images/svg/InlineSprite.svg';
import { setFilter  } from '../../redux/products/productsSlice';
// filterReducer
import styles from  "./ProductsFilter.module.css";

// Опции для селекторов
const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
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
const capitalizeFirstLeter = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

// Преобразование категорий для селектора
const categoriesList = categories?.map(el => ({
  value: el,
  label: capitalizeFirstLeter(el),
}));

const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: 'trasparent', // Стилизация фона окна
      // height: height,
      // width: width,
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'rgba(28, 28, 28, 1)'
        : isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)', // Стилизация фона активной опции и ховера
      color: isSelected ? '#E6533C' : '#EFEDE8', // Стилизация цвета текста активной опции в списке
      padding: '14px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: 'rgba(28, 28, 28, 1)', //  фон для списка
    }),
    singleValue: provided => ({
      ...provided,
      color: '#EFEDE8', // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'transparent', // Цвет разделителя
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: '#EFEDE8',
    }),
    container: provided => ({
      ...provided,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
    }),
    menuList: base => ({
      ...base,
      borderRadius: '12px', // Бордер при скроле

      '::-webkit-scrollbar': {
        display: 'none',
      },
      overflowY: 'scroll',
    }),
  };


// Компонент ProductsFilter
const ProductsFilter = () => {
  const dispatch = useDispatch();
  const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(optionsRec[0]);

  // Обработчик изменения ввода для поиска
  const onChangeSearch = event => {
    const text = event.target.value;
    setHiddenBtnClose(text.length > 0);
    setSearch(text);
    dispatch(
      setFilter ({
        search: text,
        category: category.value,
        recommended: recommended.value,
      }),
    );
  };

  // Обработчик изменения категории
  const onCategoriesChange = event => {
    setCategory(event);
    dispatch(
      setFilter ({
        category: event.value,
        search,
        recommended: recommended.value,
      }),
    );
  };

  // Обработчик изменения рекомендаций
  const onRecomendedChange = event => {
    setRecommended(event);
    dispatch(
      setFilter ({
        recommended: event.value,
        search,
        category: category.value,
      }),
    );
  };

  // Обработчик удаления текста из поля поиска
  const delTextInput = () => {
    setSearch('');
    dispatch(
      setFilter ({
        search: '',
        category: category.value,
        recommended: recommended.value,
      }),
    );
    setHiddenBtnClose(false);
  };

  return (
    <ul className={styles['products-filter-list']}>
      {/* Поиск */}
      <li>
        <label className={styles['products-filter-label']}>
          <input
            value={search}
            onChange={onChangeSearch}
            name="productSearch"
            type="text"
            placeholder="Search"
            className={styles['products-filter-search']}
          />
          {/* Кнопка для закрытия поиска */}
          <button
            className={styles['products-btn-clouse']}
            onClick={delTextInput}
            type="button"
          >
            <svg className={styles['products-svg-clouse']}>
              <use href={`${sprite}#Close`}></use>
            </svg>
          </button>
          {/* Кнопка для запуска поиска */}
          <button className={styles['products-btn-search']} type="button">
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
            onChange={onCategoriesChange}
            placeholder="Categories"
            options={categoriesList || []}
            theme={theme => ({
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
            onChange={onRecomendedChange}
            styles={customStyles}
            value={recommended}
            theme={theme => ({
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
  );
};

export default ProductsFilter;
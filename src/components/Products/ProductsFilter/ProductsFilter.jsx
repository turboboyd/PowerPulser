import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import sprite from '../../../images/svg/InlineSprite.svg';
import { selectCategoriesProducts } from '../../../redux/Products/productsSelectors';
import { getCategories } from '../../../redux/Products/productsOperations';
import { filterReducer } from '../../../redux/Products/productsSlice';
import "./ProductsFilter.module.css";

const firstLeter = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

const optionsRec = [
  { value: null, label: 'All' },
  { value: 'false', label: 'Recommended ' },
  { value: 'true', label: 'Not recommended' },
];

const ProductsFilter = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector(selectCategoriesProducts)?.map(el => ({
    value: el,
    label: firstLeter(el),
  }));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);


  const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: 'trasparent', // Стилизація фона вікна
      width: width,
      height: height,
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      fontSize: '14px',
      lineHeight: '18px',
      backgroundColor: isSelected
        ? 'rgba(28, 28, 28, 1)'
        : isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)', // Стилізфція фону ховера
      color: isSelected ? '#E6533C' : '#EFEDE8', // Стилизація кольору текста активной опції у пошуку
      padding: '14px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: 'rgba(28, 28, 28, 1)', //  фон для списку
    }),
    singleValue: provided => ({
      ...provided,
      color: '#EFEDE8', // коліт тексту активного селектору
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'transparent', // колір розподілювача
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
      fontSize: '14px',
      lineHeight: '18px',
    }),
    menuList: base => ({
      ...base,
      borderRadius: '12px', // Бордер при скролі

      '::-webkit-scrollbar': {
        display: 'none',
      },
      overflowY: 'scroll',
    }),
  };
  const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(optionsRec[0]);

  const onChangeSearch = e => {
    const text = e.target.value;
    setHiddenBtnClose(text.length > 0);
    setSearch(text);
    dispatch(
      filterReducer({
        search: text,
        category: category.value,
        recommended: recommended.value,
      }),
    );
  };

  const onCategoriesChange = e => {
    setCategory(e);
    dispatch(
      filterReducer({
        category: e.value,
        search,
        recommended: recommended.value,
      }),
    );
  };

  const onRecommendedChange = e => {
    setRecommended(e);
    dispatch(
      filterReducer({
        recommended: e.value,
        search,
        category: category.value,
      }),
    );
  };

  const delTextInput = () => {
    setSearch('');
    dispatch(
      filterReducer({
        search: '',
        category: category.value,
        recommended: recommended.value,
      }),
    );
    setHiddenBtnClose(false);
  };

    return (
      <ul className="containerForm">
      <div className="filter-title">Filters</div>
      <li>
        <label className="form">
          <input
            value={search}
            onChange={onChangeSearch}
            name="productSearch"
            type="text"
            placeholder="Search"
            className="inputForm"
          />
          <button
            onClick={delTextInput}
            style={{ display: hiddenBtnClose ? 'block' : 'none' }}
            type="button"
            className="search-btn"
          >
            <svg className="close-btn" fill="#e6533c" width="18px" height="18px">
              <use xlinkHref={`${sprite}#Close`}></use>
            </svg>
          </button>
          <button type="button" className="button">
            <svg className="search" width="18px" height="18px">
              <use xlinkHref={`${sprite}#Search`}></use>
            </svg>
          </button>
        </label>
      </li>
      <li>
        <div>
          <Select
            value={category}
            onChange={onCategoriesChange}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary50: 'rgba(255, 255, 255, 0.10)', // Колір фона при натисканні на селект в меню
                primary: 'transparent',
                neutral40: '#EFEDE8', // ховер на іконку
                neutral20: 'transparent', // дефолтний бордер
                neutral30: 'transparent', // дефолтний ховер бордер
                neutral50: 'rgba(239, 237, 232, 1)', // колір плейсхолдера
                neutral80: 'rgba(239, 237, 232, 1)',
              },
            })}
            styles={customStyles}
            options={categoriesList || []}
          />
        </div>
      </li>
      <li>
        <div>
          <Select
            value={recommended}
            onChange={onRecommendedChange}
            options={optionsRec}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary50: 'rgba(255, 255, 255, 0.10)', // Колір фона при натисканні на селект в меню
                primary: 'transparent',
                neutral40: '#EFEDE8', // ховер на іконку
                neutral20: 'transparent', // дефолтний бордер
                neutral30: 'transparent', // дефолтний ховер бордер
                neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                neutral80: 'rgba(239, 237, 232, 1)',
              },
            })}
            styles={customStyles}
          />
        </div>
      </li>
     </ul>
  );
};


export default ProductsFilter;
const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent', // Стилизация фона окна
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      margin: '7px',
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
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(28, 28, 28, 1)', // фон для списка
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#EFEDE8', // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'transparent', // Цвет разделителя
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#EFEDE8',
    }),
    container: (provided) => ({
      ...provided,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
    }),
    menuList: (base) => ({
      ...base,
      borderRadius: '12px', // Бордер при скроле
      '::-webkit-scrollbar': {
        width: '8px', // Ширина полосы прокрутки
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(239, 237, 232, 0.1)', // Цвет полосы прокрутки
        borderRadius: '12px', // Скругление углов полосы прокрутки
        height: '147px', // Высота полосы прокрутки
        // Отступ справа
    
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(28, 28, 28, 1)', // Цвет фона полосы прокрутки
        borderRadius: '12px', // Скругление углов фона полосы прокрутки
      },
      overflowY: 'scroll',
    }),
  };

  export default customStyles;
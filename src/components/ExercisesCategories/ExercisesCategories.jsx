import { useEffect, useRef, useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import css from './ExercisesCategories.module.css'
import { EXERCISES_ROUTE, WELCOME_PAGE_ROUTE } from '../../utils/const';

const categoryFilters = ['Body parts', 'Muscles', 'Equipment']
const ExercisesCategories = ({ category: initialCategory, setCategory }) => {
  const [category, setInitialCategory] = useState(initialCategory || categoryFilters[0]);
    const path = useResolvedPath();
    const navigate = useNavigate();
    const currentPathNameRef = useRef(path.pathname);

    // useEffect(() => {
    //     if (currentPathNameRef.current !== EXERCISES_ROUTE) {
    //       navigate(WELCOME_PAGE_ROUTE);
    //     }
    //   }, [category, navigate]);

      useEffect(() => {
        currentPathNameRef.current = path.pathname;
      }, [path.pathname]); 

     useEffect(() => {
        handleButtonClick(categoryFilters[0]);
    }, []); 

    const handleButtonClick = (value) => {
      setInitialCategory(value);
      setCategory(value);   
    };
  
    return (
          <ul className={css.list}>
              {categoryFilters.map((filter, index) => {
                  return (<li key={index} className={css.item} >
                      <button
                          type='button'
                          className={`${css.button_filter}  ${category === filter ? css.active : ''} `}
                          onClick={() => handleButtonClick(filter)}
                           >
                         {filter}
                       </button>
                            </li>)
})}
        </ul>  
       )
}
export default ExercisesCategories;


/* <div className={css.form_filter}>
    <label className={css.label_filter}>
      <input 
                className={css.input_filter} 
                type="radio" 
                name="category" 
                value="body" 
                checked={category === 'body'}
                onChange={handleOptionChange}
                />
      Body parts
    </label>

    <label className={css.label_filter}>
    <input 
                className={css.input_filter} 
                type="radio" 
                name="category" 
                value="muscles" 
                checked={category === 'muscles'}
                onChange={handleOptionChange}
                />
      Muscles
    </label>

    <label className={css.label_filter}>
    <input 
                className={css.input_filter} 
                type="radio" 
                name="category" 
                value="equipment" 
                checked={category === 'equipment'}
                onChange={handleOptionChange}
                />
      Equipment
    </label>
  </div> */

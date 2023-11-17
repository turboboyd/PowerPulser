import { useEffect, useRef, useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import css from './ExercisesCategories.module.css'
import { CATEGORIES_FILTER, EXERCISES_ROUTE, WELCOME_PAGE_ROUTE } from '../../utils/const';


const ExercisesCategories = ({ category: initialCategory, setCategory }) => {
  const [category, setInitialCategory] = useState(initialCategory || CATEGORIES_FILTER[0]);
    const path = useResolvedPath();
    const navigate = useNavigate();
    const currentPathNameRef = useRef(path.pathname);

    useEffect(() => {
        if (currentPathNameRef.current !== EXERCISES_ROUTE) {
          navigate(WELCOME_PAGE_ROUTE);
        }
      }, [category, navigate]);

      useEffect(() => {
        currentPathNameRef.current = path.pathname;
      }, [path.pathname]); 

    useEffect(() => {
        handleButtonClick(CATEGORIES_FILTER[0]);
    }, []); 

    const handleButtonClick = (value) => {
      setInitialCategory(value);
      setCategory(value);   
    };

    return (
          <ul className={css.list}>
              {CATEGORIES_FILTER.map((filter, index) => {
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
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import useExercise from '../../hooks/useExercise';
import axios from "axios";
import { fetchExercisesItemsSelectedFilter } from '../../redux/exercises/exercisesOperations';

import css from './ExercisesList.module.css'
import ExercisesItem from '../ExercisesItem/ExercisesItem'
import Icon from '../ComponIcon/Icon'
import { setItemsSelectedFilter } from '../../redux/exercises/exercisesSlice';

const ExercisesList = (id) => {
  const dispatch = useDispatch();
  const { exercisesItemsSelectFilter, exercisesIsLoading, exercisesGetMore, } = useExercise();
  const [numberPage, setNumberPage] = useState(1);

  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if (exercisesIsLoading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && exercisesGetMore) {
        setNumberPage(prevNumberPage => prevNumberPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [exercisesIsLoading, exercisesGetMore])

  useEffect(() => {
    const params = {
      page: numberPage,
      id: id,
  }
    const source = axios.CancelToken.source();
    const cancelToken = source.token;

    dispatch(fetchExercisesItemsSelectedFilter({ params, cancelToken }))

    return () => source.cancel();
  }, [id, numberPage, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setItemsSelectedFilter());
    };
  }, [dispatch]);

  return (
    <div>
      <div>
        <button className={css.exerciseArrow}>
          Back
          <Icon className={css.exerciseArrowSvg} iconId="Arrow-back" />
        </button>
        <h3 className={css.exercisesTitle}>Waist</h3>
      </div>
      <div className={css.cardContainer}>
        {exercisesItemsSelectFilter.map((exercise) => {
          return <ExercisesItem ref={lastElementRef} key={exercise._id} exercise={exercise} />
        })}
      </div>
    </div>
  )
}

export default ExercisesList

import React, { useCallback, useEffect, useRef } from 'react';
import css from './ExercisesList.module.css'; 
import useExercise from '../../hooks/useExercise';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchExercisesItemsSelectedFilter } from '../../redux/exercises/exercisesOperations';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { setItemsSelectedFilter, setPage } from '../../redux/exercises/exercisesSlice';

const ExercisesList = ({ id }) => {
  const dispatch = useDispatch();
  const { exercisesItemsSelectFilter, exercisesPage, exercisesIsLoading, exercisesGetMore } = useExercise();

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (exercisesIsLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && exercisesGetMore) {
          let currentPage = exercisesPage + 1;
          dispatch(setPage(currentPage));
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch, exercisesGetMore, exercisesIsLoading, exercisesPage]
  );

  useEffect(() => {
    const params = {
      page: exercisesPage,
      id: id,
    };
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    dispatch(fetchExercisesItemsSelectedFilter({ params, cancelToken }));
    return () => source.cancel();
  }, [id, exercisesPage, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setItemsSelectedFilter());
      dispatch(setPage(1))
    };
  }, [dispatch]);

  return (
    <div className={css.cardContainerBackground}>
      <div className={css.cardContainer}>
        {exercisesItemsSelectFilter.map((exercise) => (
          exercise._id && <ExercisesItem key={exercise._id} ref={lastElementRef} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;

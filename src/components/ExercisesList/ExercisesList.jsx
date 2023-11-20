import React, { useEffect } from 'react';
import css from './ExercisesList.module.css'; 
import useExercise from '../../hooks/useExercise';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchExercisesItemsSelectedFilter } from '../../redux/exercises/exercisesOperations';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { setItemsSelectedFilter } from '../../redux/exercises/exercisesSlice';

const ExercisesList = ({ id }) => {
  const dispatch = useDispatch();
  const { exercisesItemsSelectFilter } = useExercise();

  useEffect(() => {
    const params = {
      page: 1,
      id: id,
    };

    const source = axios.CancelToken.source();
    const cancelToken = source.token;

    dispatch(fetchExercisesItemsSelectedFilter({ params, cancelToken }));

    return () => source.cancel();
  }, [id, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setItemsSelectedFilter());
    };
  }, [dispatch]);

  return (
    <div className={css.cardContainerBackground}>
      <div className={css.cardContainer}>
        {exercisesItemsSelectFilter.map((exercise) => (
          exercise._id && <ExercisesItem key={exercise._id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;

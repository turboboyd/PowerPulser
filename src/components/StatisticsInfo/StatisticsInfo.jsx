import React, { useEffect } from 'react';
import css from './StatisticsInfo.module.css';
import Icon from '../ComponIcon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStatistics } from 'redux/statistics/statisticsOperations';
import { selectStatistics } from 'redux/statistics/statisticsSelectors';

const StatisticsInfo = () => {
  const dispatch = useDispatch();
  const { allBurnedColories, exercisesVideos } = useSelector(selectStatistics);

  useEffect(() => {
    dispatch(getAllStatistics());
  }, [dispatch]);

  return (
    <>
      <div className={css.polygon_card}>
        <Icon className={css.polygon_icon} iconId="Polygon" />
        <div className={css.box_title}>
          <span className={css.polygon_title}>{exercisesVideos}</span>
          <span className={css.polygon_text}>Video tutorial</span>
        </div>
      </div>

      <div className={css.cal_card}>
        <Icon className={css.calIcon} iconId="Runner" />
        <div className={css.textSvg}>
          <span className={css.cal_summa}>{allBurnedColories}</span>
          <span className={css.smallText}>cal</span>
        </div>
      </div>
    </>
  );
};

export default StatisticsInfo;

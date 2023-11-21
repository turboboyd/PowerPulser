import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../ComponIcon/Icon';
import css from './Timer.module.css';
import formatTimeTimer from '../../utils/formatTimeTimer';

const Timer = ({
  burnedCalories,
  time,
  dynamicCalories,
  setDynamicCalories,
  exerciseTime,
  setExerciseTime,
}) => {
  const [key, setKey] = useState(0);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [restTime, setRestTime] = useState('');

  const handleToggleTimer = () => {
    setIsTimerPlaying(prevState => !prevState);
    setKey(prevKey => prevKey + 1);
  };

  const handleBurnedCalories = ({ remainingTime }) => {
    const duration = Number(time) * 60;
    const exTime = Number(duration - remainingTime);
    setExerciseTime(exTime);
    const dynamicBurnedCalories = Math.floor(
      (exerciseTime * burnedCalories) / duration
    );
    setDynamicCalories(dynamicBurnedCalories);
  };

  useEffect(() => {
    if (isTimerPlaying) {
      const timer = setInterval(() => {
        setRestTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isTimerPlaying]);

  return (
    <>
      <div>
        <CountdownCircleTimer
          key={key}
          size={124}
          isPlaying={isTimerPlaying}
          duration={time * 60}
          colors={'var(--orange)'}
          strokeWidth={4}
          trailColor=" rgba(239, 237, 232, 0.3)"
          initialRemainingTime={time * 60 + restTime}
          onUpdate={remainingTime => {
            handleBurnedCalories({ remainingTime });
          }}
        >
          {({ remainingTime }) => <div>{formatTimeTimer(remainingTime)}</div>}
        </CountdownCircleTimer>
        <div className={css.buttonWrapper}>
          <button className={css.button} onClick={handleToggleTimer}>
            <Icon
              className={css.icon}
              iconId={isTimerPlaying ? 'Pause' : 'Polygon'}
            />
          </button>
          <p className={css.text}>
            Burned calories:
            <span className={css.textCalories}>{dynamicCalories}</span>
          </p>
        </div>
      </div>
    </>
  );
};

Timer.propTypes = {
  burnedCalories: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  dynamicCalories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setDynamicCalories: PropTypes.func.isRequired,
  exerciseTime: PropTypes.number.isRequired,
  setExerciseTime: PropTypes.func.isRequired,
};

export default Timer;

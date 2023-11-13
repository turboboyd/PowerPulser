import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';
import Icon from '../ComponIcon/Icon';
import css from './Timer.module.css';

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
    setIsTimerPlaying((prevState) => !prevState);
    setKey((prevKey) => prevKey + 1);
  };

  const children = ({ remainingTime }) => {
    const newTime = remainingTime;
    setRestTime(newTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const handleBurnedCalories = ({ remainingTime }) => {
    const duration = Number(time) * 60;
    setExerciseTime(duration - remainingTime);
    const dynamicBurnedCalories = Math.floor(
      (exerciseTime * burnedCalories) / duration
    );
    setDynamicCalories(dynamicBurnedCalories);
  };

  return (
    <>
      <div>
        <CountdownCircleTimer
          key={key}
          size={124}
          isPlaying={isTimerPlaying}
          duration={180}
          colors={'var(--orange)'}
          strokeWidth={4}
          trailColor=" rgba(239, 237, 232, 0.3)"
          initialRemainingTime={restTime}
          onUpdate={(remainingTime) => {
            handleBurnedCalories({ remainingTime });
          }}
        >
          {({ remainingTime }) => <div>{children({ remainingTime })}</div>}
        </CountdownCircleTimer>
        <div className={css.buttonWrapper}>
          <button className={css.button} onClick={handleToggleTimer}>
            <Icon
              className={css.icon}
              iconId={isTimerPlaying ? 'Chevron' : 'Polygon'}
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

export default Timer;

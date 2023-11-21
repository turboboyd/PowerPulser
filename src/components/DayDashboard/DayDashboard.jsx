import css from './DayDashboard.module.css';

import Icon from '../ComponIcon/Icon';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

import useStatistics from '../../hooks/useStatistics';

const DayDashboard = () => {
  const {
    dailyCalorieIntake,
    caloriesConsumed,
    caloriesRemaining,
    dailyPhysicalActivity,
    caloriesBurned,
    sportsRemaining,
  } = useStatistics();

  const isCaloriesRemaining =
    caloriesConsumed < dailyCalorieIntake ? `positive` : `negative`;
  const isSportsRemaining =
    sportsRemaining > 0 ? `positive` : `negative`;

  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={'Daily calorie intake'}
          statisticsValue={`${dailyCalorieIntake}`}
          statisticsIcon={'Fluent_food'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Daily physical activity'}
          statisticsValue={`${dailyPhysicalActivity} min`}
          statisticsIcon={'Dumbbell'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Сalories consumed'}
          statisticsValue={`${caloriesConsumed}`}
          statisticsIcon={'Apple'}
        />
        <StatisticsItem
          statisticsName={'Сalories burned'}
          statisticsValue={`${caloriesBurned}`}
          statisticsIcon={'Calories'}
        />
        <StatisticsItem
          statisticsName={'Calories remaining'}
          statisticsValue={`${caloriesRemaining}`}
          statisticsIcon={'Bubble'}
          fulfilledNorm={isCaloriesRemaining}
        />
        <StatisticsItem
          statisticsName={'Sports remaining'}
          statisticsValue={
            isSportsRemaining === 'positive'
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }
          statisticsIcon={'Runner'}
          fulfilledNorm={isSportsRemaining}
        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
          <Icon
            className={css.exclamationIcon}
            iconId={'tabler:exclamation-mark'}
          />
        </div>
        <p className={css.adviceText}>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;

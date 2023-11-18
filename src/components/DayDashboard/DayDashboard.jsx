import css from "./DayDashboard.module.css";

import Icon from "../ComponIcon/Icon";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import {
  selectDiaryExercises,
  selectDiaryProducts,
} from "../../redux/diary/diarySelectors";

const DayDashboard = () => {
  const user = useSelector(selectUser);
  const products = useSelector(selectDiaryProducts);
  const execrcises = useSelector(selectDiaryExercises);

  const dailyCalorieIntake = user.profileSettings.bmr;
  const caloriesConsumed = products.reduce(
    (sum, product) => sum + product.calories,
    0
  );
  const caloriesRemaining = dailyCalorieIntake - caloriesConsumed;
  const dailyPhysicalActivity = 110;
  const caloriesBurned = 850; //неправильно треба пігрузити вправи!!!!!!!!!!
  const sportsRemaining = 180 - dailyPhysicalActivity; //неправильно треба пігрузити вправи!!!!!!!!!!

  const isCaloriesRemaining = caloriesConsumed < dailyCalorieIntake;
  const isSportsRemaining = sportsRemaining > 0;

  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={"Daily calorie intake"}
          statisticsValue={dailyCalorieIntake}
          statisticsIcon={"Fluent_food"}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={"Daily physical activity"}
          statisticsValue={`${dailyPhysicalActivity} min`}
          statisticsIcon={"Dumbbell"}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={"Сalories consumed"}
          statisticsValue={caloriesConsumed}
          statisticsIcon={"Apple"}
        />
        <StatisticsItem
          statisticsName={"Сalories burned"}
          statisticsValue={caloriesBurned}
          statisticsIcon={"Calories"}
        />
        <StatisticsItem
          statisticsName={"Calories remaining"}
          statisticsValue={caloriesRemaining}
          statisticsIcon={"Bubble"}
          isFulfilledNorm={isCaloriesRemaining}
        />
        <StatisticsItem
          statisticsName={"Sports remaining"}
          statisticsValue={
            isSportsRemaining
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }
          statisticsIcon={"Runner"}
          isFulfilledNorm={isSportsRemaining}
        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
          <Icon
            className={css.exclamationIcon}
            iconId={"tabler:exclamation-mark"}
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

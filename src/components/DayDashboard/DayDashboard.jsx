import css from "./DayDashboard.module.css";

import Icon from "../ComponIcon/Icon";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

const DayDashboard = () => {
  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={"Daily calorie intake"}
          statisticsValue={2200}
          statisticsIcon={"Fluent_food"}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={"Daily physical activity"}
          statisticsValue={2200}
          statisticsIcon={"Dumbbell"}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={"Сalories consumed"}
          statisticsValue={2200}
          statisticsIcon={"Apple"}
        />
        <StatisticsItem
          statisticsName={"Сalories burned"}
          statisticsValue={2200}
          statisticsIcon={"Calories"}
        />
        <StatisticsItem
          statisticsName={"Calories remaining"}
          statisticsValue={2200}
          statisticsIcon={"Bubble"}
        />
        <StatisticsItem
          statisticsName={"Sports remaining"}
          statisticsValue={2200}
          statisticsIcon={"Runner"}
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

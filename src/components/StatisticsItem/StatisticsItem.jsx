import css from "./StatisticsItem.module.css";
import Icon from "../ComponIcon/Icon";

const StatisticsItem = ({
  statisticsName,
  statisticsIcon,
  statisticsValue,
  statisticPrimary = false,
}) => {
  return (
    <>
      <li
        className={`${css.statisticItem} ${
          statisticPrimary && css.primaryStatisticItem
        }`}
      >
        <div className={css.statisticTitleWrap}>
          <Icon className={css.statisticIcon} iconId={statisticsIcon} />
          <p
            className={`${css.statisticTitle} ${
              statisticPrimary && css.statisticPrimaryTitle
            }`}
          >
            {statisticsName}
          </p>
        </div>
        <div className={css.statisticValue}>{statisticsValue}</div>
      </li>
    </>
  );
};

export default StatisticsItem;

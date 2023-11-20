import css from "./StatisticsItem.module.css";
import Icon from "../ComponIcon/Icon";

const StatisticsItem = ({
  statisticsName,
  statisticsIcon,
  statisticsValue,
  statisticPrimary = "",
  isFulfilledNorm = "",
}) => {
  return (
    <>
      <li
        className={`${css.statisticItem} ${
          statisticPrimary && css.primaryStatisticItem
        } ${
          isFulfilledNorm !== "" && isFulfilledNorm
            ? css.statisticItemPositive
            : isFulfilledNorm !== "" && !isFulfilledNorm
            ? css.statisticItemNegative
            : ""
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

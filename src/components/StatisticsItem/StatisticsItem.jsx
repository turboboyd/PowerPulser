import css from './StatisticsItem.module.css';
import Icon from '../ComponIcon/Icon';
import PropTypes from 'prop-types';

const StatisticsItem = ({
  statisticsName,
  statisticsIcon,
  statisticsValue,
  statisticPrimary,
  fulfilledNorm = '',
}) => {
  return (
    <>
      <li
        className={`${css.statisticItem} ${
          statisticPrimary && css.primaryStatisticItem
        } ${
          fulfilledNorm !== '' && fulfilledNorm === 'positive'
            ? css.statisticItemPositive
            : fulfilledNorm !== '' && fulfilledNorm === 'negative'
            ? css.statisticItemNegative
            : ''
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

StatisticsItem.propTypes = {
  statisticsName: PropTypes.string.isRequired,
  statisticsIcon: PropTypes.string.isRequired,
  statisticsValue: PropTypes.string.isRequired,
  statisticPrimary: PropTypes.bool,
  fulfilledNorm: PropTypes.string,
};

export default StatisticsItem;

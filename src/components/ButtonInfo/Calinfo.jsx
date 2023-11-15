import React from 'react';
import css from './Calinfo.module.css';
import Icon from '../ComponIcon/Icon';
import sprite from "../../images/svg/InlineSprite.svg";

const CalInfo = ({ buttonClassName, iconClassName }) => {
  const buttonInfoClassName = `${css.buttonInfo} ${buttonClassName || ''}`;

  return (
    <div className={buttonInfoClassName}>
      <div className={css.calButton}>
        <div className={css.iconWrapper}>
          <Icon className={css.calIcon} sprite={sprite} iconId="Runner" />
        </div>
        <div className={css.textSvg}>
          <span className={css.boldText}>500+</span>{' '}
          <span className={css.smallText}>cal</span>
        </div>
      </div>
    </div>
  );
};

export default CalInfo;

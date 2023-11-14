import React from 'react';
import css from './ButtonInfo.module.css';
import Icon from '../ComponIcon/Icon';
import sprite from "../../images/svg/InlineSprite.svg";

const ButtonInfo = ({ text, iconId, buttonClassName, iconClassName }) => {
  const buttonInfoClassName = `${css.buttonInfo} ${buttonClassName || ''}`;

  return (
    <button className={buttonInfoClassName}>
      {iconId && (
        <div className={css.iconWrapper}>
          <Icon className={iconClassName} sprite={sprite} iconId={iconId} />
        </div>
      )}
      {text}
    </button>
  );
};

export default ButtonInfo;

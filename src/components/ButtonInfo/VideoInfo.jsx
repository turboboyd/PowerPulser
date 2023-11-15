import React from 'react';
import css from './VideoInfo.module.css';
import Icon from '../ComponIcon/Icon';
import sprite from "../../images/svg/InlineSprite.svg";

const VideoInfo = ({ buttonClassName, iconClassName }) => {
    const buttonInfoClassName = `${css.buttonInfo} ${buttonClassName || ''}`;

    return (
      <div className={buttonInfoClassName}>
        <div className={css.calButton}>
          <div className={css.iconWrapper}>
            <Icon className={css.calIcon} sprite={sprite} iconId="Polygon" />
          </div>
          <div className={css.textSvg}>
            <span className={css.boldText}>350+</span>{' '}
          </div>
          <div>
            <span className={css.smallText}>Video tutorial</span>
          </div>
        </div>
      </div>
    );
};

export default VideoInfo;

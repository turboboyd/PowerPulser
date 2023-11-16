import React from "react";
import css from "./StatisticsInfo.module.css";
import Icon from "../ComponIcon/Icon";

const StatisticsInfo = () => {
  return (
    <>
      <div className={css.polygon_card}>
        <Icon className={css.polygon_icon} iconId="Polygon" />
        <div className={css.box_title}>
          <span className={css.polygon_title}>350+</span>{" "}
          <span className={css.polygon_text}>Video tutorial</span>
        </div>
      </div>

      <div className={css.cal_card}>
        <Icon className={css.calIcon} iconId="Runner" />
        <div className={css.textSvg}>
          <span className={css.cal_summa}>500</span>{" "}
          <span className={css.smallText}>cal</span>
        </div>
      </div>
    </>
  );
};

export default StatisticsInfo;

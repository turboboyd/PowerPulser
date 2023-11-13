import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import Avatar from "../Avatar/Avatar";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import Icon from "../ComponIcon/Icon";

import css from "./UserCard.module.css";

import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperation";

const UserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    dispatch(logOutUser());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <div>
        <Avatar />
        <div>
          <StatisticsItem
            statisticsName={"Daily calorie intake"}
            statisticsValue={"0"}
            statisticsIcon={"Fluent_food"}
            statisticPrimary={true}
          />
          <StatisticsItem
            statisticsName={"Daily norm of sports"}
            statisticsValue={"0 min"}
            statisticsIcon={"Dumbbell"}
            statisticPrimary={true}
          />
        </div>
        <div className={css.warningWrap}>
          <Icon className={css.iconWarning} iconId={"icon-warning"} />

          <p className={css.warningText}>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </p>
        </div>
        <button onClick={handleLogout} to="/" className={css.logout}>
          Logout <Icon className={css.svg_logout} iconId="Log-out" />
        </button>
      </div>
    </>
  );
};

export default UserCard;

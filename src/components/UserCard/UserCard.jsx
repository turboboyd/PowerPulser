import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../Avatar/Avatar";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import Icon from "../ComponIcon/Icon";

import css from "./UserCard.module.css";

import { logOutUser } from "../../redux/auth/authOperation";
import { selectUser } from "../../redux/auth/authSelectors";

const UserCard = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const dailyCalorieIntake =
    user && user.profileSettings ? user.profileSettings.bmr || 0 : 0;
  const handleLogout = useCallback(() => {
    dispatch(logOutUser());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <div className={css.avatarWrapper}>
        <Avatar />
        <div className={css.statisticsWrapper}>
          <StatisticsItem
            className={css.statistics}
            statisticsName={"Daily calorie intake"}
            statisticsValue={dailyCalorieIntake}
            statisticsIcon={"Fluent_food"}
            statisticPrimary={true}
          />
          <StatisticsItem
            statisticsName={"Daily norm of sports"}
            statisticsValue={"110 min"}
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

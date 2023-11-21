import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Avatar from "../Avatar/Avatar";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import Icon from "../ComponIcon/Icon";

import { logOutUser } from "../../redux/auth/authOperation";

import css from "./UserCard.module.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, avatarURL, profileSettings } = user;

  const dailyCalorieIntake =
    user && profileSettings ? profileSettings.bmr || 0 : 0;
  const handleLogout = useCallback(() => {
    dispatch(logOutUser());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <div className={css.avatarWrapper}>
        <Avatar name={name} avatarURL={avatarURL} />
        <div className={css.statisticsWrapper}>
          <StatisticsItem
            className={css.statistics}
            statisticsName={"Daily calorie intake"}
            statisticsValue={`${dailyCalorieIntake}`}
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

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileSettings: PropTypes.shape({
      bmr: PropTypes.number,
    }).isRequired,
    avatarURL: PropTypes.string,
  }).isRequired,
};

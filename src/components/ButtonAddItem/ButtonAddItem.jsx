import React from "react";
import { NavLink } from "react-router-dom";
import css from "./ButtonAddItem.module.css";
import Icon from "../ComponIcon/Icon";

const ButtonAddItem = ({ titleLink, titleRoute }) => {
  return (
    <>
      <NavLink className={css.addButtonLink} to={titleRoute}>
        <p className={css.addButtonTitle}>{titleLink}</p>
        <Icon className={css.addButtonImg} iconId={"Arrow"} />
      </NavLink>
    </>
  );
};

export default ButtonAddItem;

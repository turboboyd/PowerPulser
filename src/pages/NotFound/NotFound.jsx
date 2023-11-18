import { DIARY_ROUTE, WELCOME_PAGE_ROUTE } from "../../utils/const";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./NotFound.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo/Logo";

const NotFound = () => {
  
  const { isVerify } = useAuth();
  const text = !isVerify ? "Go Home" : "Go Diary";
  const link = !isVerify ? WELCOME_PAGE_ROUTE : DIARY_ROUTE;
  const isNotFoundPage = true;
  return (
    <>
      <div className={css.block_error}>
        <Logo isNotFoundPage={isNotFoundPage}/>
        <h1 className={css.title_one}>404</h1>
        <p className={css.text_error}>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </p>
        <Link className={css.link_goHome} to={link}>
          {text}
        </Link>
      </div>
      <BackgroundImage />
    </>
  );
};

export default NotFound;

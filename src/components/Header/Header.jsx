import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import css from "./Header.module.css";
import { PROFILE_ROUTE } from "../../utils/const";

import Icon from "../ComponIcon/Icon";
import Logo from "../Logo/Logo";
import UserNav from "../User/UserNav/UserNav";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperation";
import { useAuth } from "../../hooks/useAuth";
import UserBar from "../User/UserBar/UserBar";
import UserBurgerMenu from "../User/UserBurgerMenu/UserBurgerMenu";
import Container from "../Container/Container";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const { isVerify } = useAuth();

  const handleLogout = useCallback(() => {
    dispatch(logOutUser());
    navigate("/");
  }, [dispatch, navigate]);
  const toggleBurger = useCallback(() => {
    setBurgerOpen((prevIsBurgerOpen) => !prevIsBurgerOpen);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setBurgerOpen(false);
    }
  }, []);

  const handleOverlayClick = useCallback(
    (event) => {
      if (isBurgerOpen && !event.target.closest('[data-type="burger-nav"]')) {
        setBurgerOpen(false);
      }
    },
    [isBurgerOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOverlayClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [handleKeyDown, handleOverlayClick]);

  return (
    <Container className={css.line} onClick={handleOverlayClick}>
      <header className={isVerify ? css.header_user : css.header_user_not}>
        <Logo />
        {isVerify && (
          <div className={css.wrap}>
            <UserNav />
            <UserBar handleLogout={handleLogout} />

            <button
              data-type="burger-nav"
              className={css.burger_btn}
              onClick={toggleBurger}
            >
              <Icon className={css.burger_btn} iconId="Menu" />
            </button>
          </div>
        )}
      </header>

      {isVerify && (
        <UserBurgerMenu
          handleLogout={handleLogout}
          isBurgerOpen={isBurgerOpen}
          toggleBurger={toggleBurger}
        />
      )}
    </Container>
  );
};

export default Header;

import { Navigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import css from "./Header.module.css";

import Icon from "../ComponIcon/Icon";
import Logo from "../Logo/Logo";
import UserNav from "../User/UserNav/UserNav";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperation";
import UserBar from "../User/UserBar/UserBar";
import UserBurgerMenu from "../User/UserBurgerMenu/UserBurgerMenu";
import Container from "../Container/Container";
import useAuth from "../../hooks/useAuth";
import { WELCOME_PAGE_ROUTE } from "../../utils/const";

const Header = () => {
  const dispatch = useDispatch();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const { user } = useAuth();
  
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);

  const handleLogout = useCallback(() => {
    dispatch(logOutUser());
    <Navigate to={WELCOME_PAGE_ROUTE} />;
  }, [dispatch]);

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
      <header className={css.header_user}>
        <Logo
          isNotFoundPage={isNotFoundPage}
          setIsNotFoundPage={setIsNotFoundPage}
        />

        <div className={css.wrap}>
          {user.profileSettings && (
            <nav className={css.nav}>
              <UserNav />
            </nav>
          )}
          <UserBar handleLogout={handleLogout} />
          <button
            data-type="burger-nav"
            className={css.burger_btn}
            onClick={toggleBurger}
          >
            <Icon className={css.burger_btn} iconId="Menu" />
          </button>
        </div>
      </header>

      <UserBurgerMenu
        handleLogout={handleLogout}
        isBurgerOpen={isBurgerOpen}
        toggleBurger={toggleBurger}
        profileSettings={user.profileSettings}
      />
    </Container>
  );
};

export default Header;

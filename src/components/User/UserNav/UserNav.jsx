import { NavLink } from 'react-router-dom';
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
} from "../../../utils/const";
import css from "./UserNav.module.css";

const routes = [
  { path: DIARY_ROUTE, name: "Diary" },
  { path: PRODUCT_ROUTE, name: "Products" },
  { path: EXERCISES_ROUTE, name: "Exercises" },
];

const UserNav = () => {
  return (
    <ul className={css.user_list}>
      {routes.map(route => (
        <li key={route.name} className={css.user_item}>
          <NavLink
            className={css.link}
            to={route.path}
            activeClassName={css.active}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default UserNav;

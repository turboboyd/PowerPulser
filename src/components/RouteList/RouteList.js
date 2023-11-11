
import { Link } from "react-router-dom";
import {
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
} from "../../utils/const";
import css from './RouteList.module.css'

const routes = [
  { path: DIARY_ROUTE, name: "Diary" },
  { path: PRODUCT_ROUTE, name: "Products" },
  { path: EXERCISES_ROUTE, name: "Exercises" },
];

const RouteList = () => (
  <ul className={css.list}>
    {routes.map((route) => (
      <li key={route.name} className={css.item}>
        <Link className={css.link} to={route.path}>
                {route.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default RouteList;
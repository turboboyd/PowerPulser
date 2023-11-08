import { lazy } from "react";


import {
  WelcomePage_ROUTE,
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
  SIGNG_UP_ROUTE,
  SIGN_IN_ROUTE,

} from "./utils/const";

const WelcomePage = lazy(() => import("./pages/"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const AuthPage = lazy(() => import("./pages/"));
// const DiaryPage = lazy(() => import("./pages/Basket/Basket"));
// const Shop = lazy(() => import("./pages/Shop/Shop"));

// const DevicePage = lazy(() => import("./pages/DevicePage/DevicePage"));
export const NotFound = lazy(() => import("./pages/"));



export const authRoutes = [ 

  {
    path: PROFILE_ROUTE,
    Element: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: WelcomePage_ROUTE,
    Element: <WelcomePage />,
  },
  {
    path: SIGNG_UP_ROUTE,
    Element: <AuthPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <AuthPage />,
  },
  {
    path: DIARY_ROUTE,
    Element: <AuthPage />,
  },
  {
    path: PRODUCT_ROUTE,
    Element: <P />,
  },

  {
    path: EXERCISES_ROUTE,
    Element: <Shop />,
  },
];



import { lazy } from "react";
const WelcomePage = lazy(() => import("./WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("./AuthPage/AuthPage"));
const DiaryPage = lazy(() => import("./DiaryPage/DiaryPage"));
const ExercisesPage = lazy(() => import("./ExercisesPage/ExercisesPage"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage"));
const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));

export {
  WelcomePage,
  AuthPage,
  DiaryPage,
  ExercisesPage,
  NotFound,
  ProductsPage,
  ProfilePage,
};

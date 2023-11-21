import { lazy } from "react";
export const WelcomePage = lazy(() => import("./WelcomePage/WelcomePage"));
export const AuthPage = lazy(() => import("./AuthPage/AuthPage"));
export const DiaryPage = lazy(() => import("./DiaryPage/DiaryPage"));
export const ExercisesPage = lazy(() =>
  import("./ExercisesPage/ExercisesPage")
);
export const ExercisesCategoryPage = lazy(() =>
  import("./ExercisesCategoryPage/ExercisesCategoryPage")
);
export const NotFound = lazy(() => import("./NotFound/NotFound"));
export const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage"));
export const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));
export const VerifyPage = lazy(() => import("./VerifyPage/VerifyPage"));
export const PasswordPage = lazy(() => import('./PasswordPage/PasswordPage'));
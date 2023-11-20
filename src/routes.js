import {
  WELCOME_PAGE_ROUTE,
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  VERIFY_ROUTE,
} from "./utils/const";

import {
  WelcomePage,
  DiaryPage,
  ExercisesPage,
  ProductsPage,
  ProfilePage,
  VerifyPage,
  AuthPage,
} from "./pages";
import ExercisesList from "./components/ExercisesList/ExercisesList";

export const authRoutes = [
  {
    path: DIARY_ROUTE,
    Element: <DiaryPage />,
  },
  {
    path: PROFILE_ROUTE,
    Element: <ProfilePage />,
  },
  {
    path: PRODUCT_ROUTE,
    Element: <ProductsPage />,
  },
  {
    path: EXERCISES_ROUTE,
    Element: <ExercisesPage />,
  },
  {
    path: EXERCISES_ROUTE + "/:id",
    Element: <ExercisesList />,
  },
];

export const publicRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    Element: <WelcomePage />,
  },
  {
    path: SIGN_UP_ROUTE,
    Element: <AuthPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <AuthPage />,
  },
  {
    path: VERIFY_ROUTE + "/:id",
    Element: <VerifyPage />,
  },
];

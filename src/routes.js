import {
  WelcomePage_ROUTE,
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
  SIGNG_UP_ROUTE,
  SIGN_IN_ROUTE,
} from "./utils/const";

import {
  WelcomePage,
  SignUpPage,
  SignInPage,
  DiaryPage,
  ExercisesPage,
  ProductsPage,
  ProfilePage,
} from "./pages";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: WelcomePage_ROUTE,
    Element: <WelcomePage />,
  },
  {
    path: SIGNG_UP_ROUTE,
    Element: <SignUpPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <SignInPage />,
  },
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
];

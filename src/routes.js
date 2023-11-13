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
  SignUpPage,
  SignInPage,
  DiaryPage,
  ExercisesPage,
  ProductsPage,
  ProfilePage,
  VerifyPage,
} from "./pages";

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
];

export const publicRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    Element: <WelcomePage />,
  },
  {
    path: SIGN_UP_ROUTE,
    Element: <SignUpPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <SignInPage />,
  },
  {
    path: VERIFY_ROUTE + "/:id",
    Element: <VerifyPage />,
  },
];

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
  AuthPage,
  DiaryPage,
  ExercisesPage,
  ProductsPage,
  ProfilePage,
} from "./pages";


export const authRoutes = [ 

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



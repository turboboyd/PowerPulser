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
  NotFound,
  ProductsPage,
  ProfilePage,
} from "./pages";

  console.log("<AuthPage/>: ", <AuthPage />);





export const authRoutes = [ 


];

export const publicRoutes = [
  {
    path: WelcomePage_ROUTE,
    Element: <WelcomePage />,
  },
  {
    path: SIGNG_UP_ROUTE,
    Element: <AuthPage/>,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <AuthPage/>,
  },
  {
    path: DIARY_ROUTE,
    Element: <DiaryPage />,
  },
];



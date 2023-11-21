import {
  WELCOME_PAGE_ROUTE,
  DIARY_ROUTE,
  PRODUCT_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  VERIFY_ROUTE,
  PASSWORD_ROUTE,
} from './utils/const';

import {
  WelcomePage,
  DiaryPage,
  ExercisesPage,
  ExercisesCategoryPage,
  ProductsPage,
  ProfilePage,
  VerifyPage,
  AuthPage,
  PasswordPage,
} from './pages';
import RestrictedRoute from 'RestrictedRoute';

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
    path: EXERCISES_ROUTE + '/:id',
    Element: <ExercisesCategoryPage />,
  },
];

export const publicRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    Element: (
      <RestrictedRoute>
        <WelcomePage />
      </RestrictedRoute>
    ),
  },
  {
    path: SIGN_UP_ROUTE,
    Element: (
      <RestrictedRoute>
        <AuthPage />
      </RestrictedRoute>
    ),
  },
  {
    path: SIGN_IN_ROUTE,
    Element: (
      <RestrictedRoute>
        <AuthPage />
      </RestrictedRoute>
    ),
  },
  {
    path: VERIFY_ROUTE + '/:id',
    Element: (
      <RestrictedRoute>
        <VerifyPage />
      </RestrictedRoute>
    ),
  },
  {
    path: PASSWORD_ROUTE,
    Element: <PasswordPage />,
  },
  {
    path: PASSWORD_ROUTE + '/:id',
    Element: <PasswordPage />,
  },
];

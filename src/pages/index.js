import { lazy } from "react";
export const WelcomePage = lazy(() => import("./WelcomePage/WelcomePage"));
export const AuthPage = lazy(() => import("./AuthPage/AuthPage"));
// export const SignUpPage = lazy(() => import("./SignUpPage1/SignUpPage"));
// export const SignInPage = lazy(() => import("./SignInPage1/SignInPage"));
export const DiaryPage = lazy(() => import("./DiaryPage/DiaryPage"));
export const ExercisesPage = lazy(() =>
import("./ExercisesPage/ExercisesPage")
);
export const NotFound = lazy(() => import("./NotFound/NotFound"));
export const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage"));
export const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));
export const VerifyPage = lazy(() => import("./VerifyPage/VerifyPage"));
export const ChangePassword = lazy(() => import("./ChangePassword/ChangePassword"));
export const NewPassword = lazy(() => import("./NewPassword/NewPassword"));
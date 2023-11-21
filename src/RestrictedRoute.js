import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import getLogoLink from "./utils/getLogoLink";

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const { isVerify, user, isAuthCheck } = useAuth();

  const link = getLogoLink(isVerify, user);
  const shouldRedirect = isVerify && isAuthCheck;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;

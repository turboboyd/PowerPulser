import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import getLogoLink from "./utils/getLogoLink";

const RestrictedRoute = ({ children}) => {

  const { isVerify, user, isAuthCheck } = useAuth();

  const link = getLogoLink(isVerify, user);
  const shouldRedirect = isVerify && isAuthCheck;
  return shouldRedirect ? <Navigate to={link} /> : children;
};

export default RestrictedRoute;

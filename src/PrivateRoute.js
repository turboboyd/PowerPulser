import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import getLogoLink from "./utils/getLogoLink";

const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const { isVerify, isAuthCheck, user } = useAuth();
  const link = getLogoLink(isVerify, user);
  const shouldRedirect = !isVerify && isAuthCheck;

  
  return shouldRedirect ? <Navigate to={link} /> : element;
};

export default PrivateRoute;

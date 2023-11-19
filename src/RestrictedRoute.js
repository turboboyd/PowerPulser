import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import getLogoLink from "./utils/getLogoLink";



const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const { isVerify, user } = useAuth();

  const link = getLogoLink(isVerify, user);
  return isVerify ? <Navigate to={link} /> : element;
};

export default RestrictedRoute;

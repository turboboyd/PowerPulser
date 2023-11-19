import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import getLogoLink from "./utils/getLogoLink";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const { isVerify, user } = useAuth();

  const link = getLogoLink(isVerify, user);
  return isVerify ? <Navigate to={link} /> : element;
};

export default RestrictedRoute;

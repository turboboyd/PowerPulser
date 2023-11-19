import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const { isVerify, isAuthCheck } = useAuth();

  const shouldRedirect = !isVerify && isAuthCheck;
  return shouldRedirect ? <Navigate to={redirectTo} /> : element;
};

export default PrivateRoute;

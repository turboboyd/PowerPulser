import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const { isVerify, isRefreshing } = useAuth();
  const shouldRedirect = !isVerify && isRefreshing;
  console.log('isVerify: ', isVerify);
  // console.log('shouldRedirect: ', shouldRedirect);
  return !isVerify ? <Navigate to={redirectTo} /> : element;
};

export default PrivateRoute;

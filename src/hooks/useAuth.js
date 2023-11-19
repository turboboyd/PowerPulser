import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoading,
  selectIsRefreshing,
  selectIsVerify,
  selectStatus,
  selectError,
  selectIsAuthCheck,
} from "../redux/auth/authSelectors";

const useAuth = () => {
  const user = useSelector(selectUser);
  const isVerify = useSelector(selectIsVerify);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isAuthCheck = useSelector(selectIsAuthCheck);
  return {
    user,
    isVerify,
    isLoading,
    isRefreshing,
    status,
    error,
    isAuthCheck,
  };
};

export default useAuth;

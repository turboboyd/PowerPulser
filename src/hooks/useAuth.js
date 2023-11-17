import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoading,
  selectIsRefreshing,
  selectIsVerify,
  selectStatus,
  selectError,
} from "../redux/auth/authSelectors";

const useAuth = () => {
  const user = useSelector(selectUser);
  const isVerify = useSelector(selectIsVerify);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  return {
    user,
    isVerify,
    isLoading,
    isRefreshing,
    status,
    error,
  };
};

export default useAuth;

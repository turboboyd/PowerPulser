import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoading,
  selectIsRefreshing,
  selectIsVerify,
  selectStatus,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isVerify = useSelector(selectIsVerify);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const status = useSelector(selectStatus);
  return {
    user,
    isVerify,
    isLoading,
    isRefreshing,
    status,
  };
};

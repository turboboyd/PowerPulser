import { useSelector } from 'react-redux';
import { selectUser, selectIsLoading, selectIsRefreshing, selectIsVerify } from '../redux/auth/authSelectors';


export const useAuth = () => {
    const user = useSelector(selectUser);
    const isVerify = useSelector(selectIsVerify);
    const isLoading = useSelector(selectIsLoading);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        user,
        isVerify,
        isLoading,
        isRefreshing,
    };
};
import { useSelector } from 'react-redux';
import { selectData, selectIsLoading, selectIsRefreshing, selectIsSuccesses } from 'redux/auth/authSelectors';


export const useAuth = () => {
    const data = useSelector(selectData);
    const isSuccesses = useSelector(selectIsSuccesses);
    const isLoading = useSelector(selectIsLoading);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        data,
        isSuccesses,
        isLoading,
        isRefreshing,
    };
};
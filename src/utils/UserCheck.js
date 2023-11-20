import { Navigate } from 'react-router-dom';
import { PROFILE_ROUTE } from './const';
import useAuth from '../hooks/useAuth';

const UserCheck = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.profileSettings === null) {
    return <Navigate to={PROFILE_ROUTE} />;
  }

  return children;
};

export default UserCheck
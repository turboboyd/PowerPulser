import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from './hooks/useAuth';
import { refreshUser } from './redux/auth/authOperation';
import './App.css';

import Layout from './components/Layout/Layout';
import { authRoutes, publicRoutes } from './routes';
import { NotFound } from './pages';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            {authRoutes.map(({ path, Element }) => (
              <Route
                key={path}
                path={path}
                element={<PrivateRoute element={Element} />}
                exact
              ></Route>
            ))}
            {publicRoutes.map(({ path, Element }) => (
              <Route
                key={path}
                path={path}
                element={<RestrictedRoute element={Element} />}
                exact
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;

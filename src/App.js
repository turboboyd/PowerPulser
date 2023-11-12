import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from "./redux/auth/authOperation";
import "./App.css";

import Layout from "./components/Layout/Layout";
import { authRoutes, publicRoutes } from "./routes";
import { NotFound } from "./pages";
import { selectIsVerify } from "./redux/auth/authSelectors";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing} = useAuth;
  const isVerify = useSelector(selectIsVerify);


   useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            {isVerify &&
              authRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={Element} exact></Route>
              ))}
            {!isVerify && publicRoutes.map(({ path, Element }) => (
              <Route key={path} path={path} element={Element} exact />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;

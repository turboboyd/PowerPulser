import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import useAuth from "../../hooks/useAuth";
import { Container, Section } from "../Container";
import { authRoutes, publicRoutes } from "../../routes";

export default function Layout() {
  const location = useLocation();
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const { isVerify } = useAuth();

  useEffect(() => {
    const allPaths = [...authRoutes, ...publicRoutes].map(
      (route) => route.path
    );
    setIsNotFoundPage(!allPaths.includes(location.pathname));
  }, [location]);
  return (
    <>
      {isVerify && !isNotFoundPage && (
        <Header isNotFoundPage={isNotFoundPage} />
      )}
      <main>
        <Section isNotFoundPage={isNotFoundPage}>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}

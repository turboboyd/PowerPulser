import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import useAuth from "../../hooks/useAuth";
import { Container, Section } from "../Container";
import { publicRoutes, } from "../../routes";
import UserCheck from "../../utils/UserCheck";

export default function Layout() {
  const location = useLocation();
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const { isVerify } = useAuth();
  const isAuthRoute = (path, publicRoutes) => publicRoutes.some((route) => route.path === path);


  const shouldRenderHeader =isVerify && !isAuthRoute(location.pathname, publicRoutes);
  const shouldRenderUserCheck = !isAuthRoute(location.pathname, publicRoutes);
  return (
    <>
      {shouldRenderHeader && (
        <Header
          isNotFoundPage={isNotFoundPage}
          setIsNotFoundPage={setIsNotFoundPage}
        />
      )}
      {shouldRenderUserCheck && <UserCheck />}
      <main>
        <Suspense fallback={<Loader />}>
          <Section isNotFoundPage={isNotFoundPage}>
            <Container>
              <Outlet />
            </Container>
          </Section>
        </Suspense>
      </main>
    </>
  );
}

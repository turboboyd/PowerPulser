import { Suspense, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import useAuth from "../../hooks/useAuth";
import { Container, Section } from "../Container";
import { authRoutes, publicRoutes, } from "../../routes";
import UserCheck from "../../utils/UserCheck";
import { EXERCISES_ROUTE } from "utils/const";

export default function Layout() {
  const { id } = useParams();

  const location = useLocation();
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const { isVerify } = useAuth();
  const isAuthRoute = (path, publicRoutes) => publicRoutes.some((route) => route.path === path);
  
  const shouldRenderRouter = location.pathname.includes(`${EXERCISES_ROUTE}/${id}`);
  const shouldRenderHeader =isVerify && isAuthRoute(location.pathname, authRoutes);
  const shouldRenderUserCheck = !isAuthRoute(location.pathname, publicRoutes);
    const shouldRenderHeaderComponent =
      shouldRenderRouter || shouldRenderHeader;

  return (
    <>
      {shouldRenderHeaderComponent && (
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

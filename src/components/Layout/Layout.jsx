import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import useAuth from "../../hooks/useAuth";
import { Container, Section } from "../Container";

export default function Layout() {
  const { isVerify } = useAuth();
  return (
    <>
      {isVerify && <Header />}
      <main>
        <Section>
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

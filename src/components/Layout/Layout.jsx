import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "../Container/Container";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import Section from "../Container/Section";
import { useSelector } from "react-redux";
import { selectIsVerify } from "../../redux/auth/authSelectors";

export default function Layout() {
  const isVerify = useSelector(selectIsVerify);


  return (
    <>
      {isVerify && <Container>
        <Header />
      </Container>}
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

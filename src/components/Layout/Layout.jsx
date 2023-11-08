
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "../Container/Container";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";


export default function Layout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}

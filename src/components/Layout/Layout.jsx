
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "../Container/Container";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <section className={css.section}>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
}

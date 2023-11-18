import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import useAuth from "../../hooks/useAuth";

export default function Layout() {
  const { isLoading } = useAuth()
  return (
    <div className={css.section}>
      <Header />
      <main>
        {/* <Section>
          <Container> */}
            <Suspense fallback={<Loader />}>
               <Outlet/>
            </Suspense>
          {/* </Container>
        </Section> */}
      </main>
    </div>
  );
}

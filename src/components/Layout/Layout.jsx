import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import Section from "../Container/Section";
import { useSelector } from "react-redux";
import { selectIsVerify } from "../../redux/auth/authSelectors";
import { authRoutes, publicRoutes } from "../../routes";

export default function Layout() {



  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet/>
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { authRoutes, publicRoutes, NotFound } from "../routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} exact></Route>
        ))}
        {publicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element}></Route>
        ))}
        {/* <Route path="*" element={<Navigate to={SHOP_ROUTE} />} /> */}
        <Route path="*" element={NotFound} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import { authRoutes, publicRoutes } from "./routes";
import { NotFound } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} exact></Route>
        ))}
        {console.log('publicRoutes: ', publicRoutes)}
        {publicRoutes.map(({ path, Element }) =>

        
        console.log('Element: ', Element)

        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

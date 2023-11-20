import TitlePage from "../../components/TitlePage/TitlePage";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/const";

const ProductsPage = () => {
  
  const { user } = useAuth();
  if (!user || user.profileSettings === null) {
    return <Navigate to={PROFILE_ROUTE} />;
  }
  return (
    <>
      <div className={css.containerProducts}>
        <TitlePage title="Products" />
        <ProductsFilter />
      </div>
      <ProductsList />
    </>
  );
};

export default ProductsPage;

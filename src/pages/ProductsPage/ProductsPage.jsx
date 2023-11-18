import TitlePage from "../../components/TitlePage/TitlePage";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import css from "./../../components/ExercisesList/ExercisesList.module.css";

const ProductsPage = () => {
  return (
    <>
      <TitlePage title="Products" />
      <ProductsFilter />
      <ProductsList />
    </>
  );
};

export default ProductsPage;

import TitlePage from "../../components/TitlePage/TitlePage";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductsBackgroundImage from "../../components/BackgroundImage/Products/ProductsBackgroundImage";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import { Container, Section } from "../../components/Container";

const ProductsPage = () => {
  return (
    <Section>
      <Container>
        <div className={css.containerProducts}>
        <TitlePage title="Products" />
        </div>
        <ProductsFilter />
        <ProductsList />
        <ProductsList />
        <ProductsBackgroundImage />
      </Container>
    </Section>
  );
};

export default ProductsPage;

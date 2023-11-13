import TitlePage from '../../components/TitlePage/TitlePage';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';

const ProductsPage = () => {
  return (
    <>
      <TitlePage title="Products" />
      <ProductsFilter/>
      <ProductsList />
    </>
  );
};

export default ProductsPage;

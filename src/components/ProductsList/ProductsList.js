import productsData from '../../RESOURCES/resources/products.json';

import css from './../ExercisesList/ExercisesList.module.css';
import ProductsItem from '../ProductsItem/ProductsItem';

const ProductsList = () => {
  const products = productsData.slice(0, 20);

  return (
    <div className={css.cardContainer}>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;

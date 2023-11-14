
import TitlePage from '../../components/TitlePage/TitlePage';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import ProductsBackgroundImage from '../../components/BackgroundImage/Products/ProductsBackgroundImage'
import css from './../../components/ExercisesList/ExercisesList.module.css'

const ProductsPage = () => {
  return (
    <>
      <TitlePage title="Products" />

      <ProductsFilter/>
      <ProductsList />
      <ProductsBackgroundImage />

    </>
  )
}

export default ProductsPage

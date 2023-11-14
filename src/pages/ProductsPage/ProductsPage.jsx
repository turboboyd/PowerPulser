import TitlePage from '../../components/TitlePage/TitlePage'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsBackgroundImage from '../../components/BackgroundImage/Products/ProductsBackgroundImage'
import css from './../../components/ExercisesList/ExercisesList.module.css'
const ProductsPage = () => {
  return (
    <>
      <TitlePage title="Products" />
      <div className={css.cardContainerBackground}>
        <ProductsList />
      </div>
      <ProductsBackgroundImage />
    </>
  )
}

export default ProductsPage

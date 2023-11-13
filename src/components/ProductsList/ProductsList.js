import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from './../../redux/products/productsSelectors'
import { useEffect } from 'react'
import { fetchProducts } from './../../redux/products/productsOperations'

import ProductsItem from '../ProductsItem/ProductsItem'
import css from './../ExercisesList/ExercisesList.module.css'

const ProductsList = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className={css.cardContainer}>
      {products.items.map((product) => {
        return <ProductsItem key={product._id} product={product} />
      })}
    </div>
  )
}

export default ProductsList

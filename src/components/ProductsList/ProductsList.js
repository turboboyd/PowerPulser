import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useRef, useState } from 'react'
import axios from "axios";
import { fetchProducts } from './../../redux/products/productsOperations'
import useProduct from '../../hooks/useProduct'
import ProductsItem from '../ProductsItem/ProductsItem'
import css from './../ExercisesList/ExercisesList.module.css'

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, productsIsLoading, productsGetMore } = useProduct();
  const [numberPage, setNumberPage] = useState({ page: 1 })

  const observer = useRef();

  const lastElementRef = useCallback(node => {
    if (productsIsLoading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && productsGetMore) {
        setNumberPage(prevNumberPage => {
          return { page: prevNumberPage.page + 1 }
        })
      }
    })
    if (node) observer.current.observe(node)
  }, [productsIsLoading, productsGetMore])

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;

    dispatch(fetchProducts({ numberPage, cancelToken }))

    return () => source.cancel();
  }, [numberPage, dispatch]);

  return (
    <div className={css.cardContainer}>
      {products.map((product, index) => {
        if (products.length === index + 1) {
          return <ProductsItem ref={lastElementRef} key={product._id} product={product} />
        } else {
          return <ProductsItem key={product._id} product={product} />
        }
      })}
    </div>
  );
};

export default ProductsList

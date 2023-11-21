import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { fetchProducts } from './../../redux/products/productsOperations';
import useProduct from '../../hooks/useProduct';
import ProductsItem from '../ProductsItem/ProductsItem';
import css from './../ExercisesList/ExercisesList.module.css';
import { setFilters, setItems } from '../../redux/products/productsSlice';
import Loader from '../Loader/Loader';

const ProductsList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { products, filters, productsIsLoading, productsGetMore } =
    useProduct();
  const observer = useRef();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const isEmptyParams =
    Object.keys(params).length > 0 &&
    (params.search !== filters.search ||
      params.category !== filters.category ||
      params.recommended !== filters.recommended);

  const lastElementRef = useCallback(
    (node) => {
      if (productsIsLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && productsGetMore) {
          let currentPage = filters.page + 1;
          dispatch(setFilters({ page: currentPage }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [productsIsLoading, productsGetMore, dispatch, filters.page]
  );

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    const filterParams = filters;
    if (isEmptyParams) {
      dispatch(setFilters({ ...params }));
    }

    dispatch(fetchProducts({ filterParams, cancelToken }));

    return () => source.cancel();
  }, [dispatch, filters, params, isEmptyParams]);

  useEffect(() => {
    return () => {
      dispatch(setItems());
      dispatch(setFilters({ page: 1 }));
    };
  }, [dispatch]);

  return (
    <>
      {productsIsLoading && filters.page === 1 && <Loader />}
      <div className={css.cardContainer}>
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <ProductsItem
                ref={lastElementRef}
                key={product._id}
                product={product}
              />
            );
          } else {
            return <ProductsItem key={product._id} product={product} />;
          }
        })}
      </div>
    </>
  );
};

export default ProductsList;

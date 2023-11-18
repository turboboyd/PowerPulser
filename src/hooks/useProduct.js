import { useSelector } from "react-redux";
import { selectProducts, selectProductsCategory, selectProductsError, selectProductsGetMore, selectProductsIsLoading } from "../redux/products/productsSelectors";


const useProduct = () => {
    const products = useSelector(selectProducts);
    const category = useSelector(selectProductsCategory);
    const productsIsLoading = useSelector(selectProductsIsLoading);
    const productsError = useSelector(selectProductsError);
    const productsGetMore = useSelector(selectProductsGetMore);
    
    return {
        products,
        productsIsLoading,
        productsError,
        productsGetMore,
        category,
    };
};

export default useProduct;
import { useSelector } from "react-redux";
import { selectProducts, selectProductsError, selectProductsGetMore, selectProductsIsLoading } from "../redux/products/productsSelectors";

const useProduct = () => {
    const products = useSelector(selectProducts);
    const productsIsLoading = useSelector(selectProductsIsLoading);
    const productsError = useSelector(selectProductsError);
    const productsGetMore = useSelector(selectProductsGetMore);
    
    return {
        products,
        productsIsLoading,
        productsError,
        productsGetMore,
    };
};

export default useProduct;
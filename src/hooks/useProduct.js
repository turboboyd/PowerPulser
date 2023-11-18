import { useSelector } from "react-redux";
import { selectProducts, selectProductsError, selectProductsIsLoading } from "../redux/products/productsSelectors";

const useProduct = () => {
    const products = useSelector(selectProducts);
    const productsIsLoading = useSelector(selectProductsIsLoading);
    const productsError = useSelector(selectProductsError);
    
    return {
        products,
        productsIsLoading,
        productsError,
    };
};

export default useProduct;
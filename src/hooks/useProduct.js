import { useSelector } from "react-redux";
import { selectProducts, selectProductsCategory, selectProductsError, selectProductsIsLoading } from "../redux/products/productsSelectors";

const useProduct = () => {
    const products = useSelector(selectProducts);
    const category = useSelector(selectProductsCategory);
    const productsIsLoading = useSelector(selectProductsIsLoading);
    const productsError = useSelector(selectProductsError);
    
    return {
        products,
        productsIsLoading,
        productsError,
        category,
    };
};

export default useProduct;
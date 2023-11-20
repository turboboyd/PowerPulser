import css from "./DayProducts.module.css";
import useDiary from "../../hooks/useDiary";

import { PRODUCT_ROUTE } from "../../utils/const";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import ProductsTable from "../ProductsTable/ProductsTable";
import EmptyList from "../EmptyList/EmptyList";


const DayProducts = () => {
  const { diaryProducts } = useDiary();

  return (
    <div className={css.dayProducts}>
      <div className={css.dayScrollWrap}>
        <div className={css.diaryNav}>
          <h3 className={css.diarySubtitle}>Products</h3>
          <ButtonAddItem titleLink="Add product" titleRoute={PRODUCT_ROUTE} />
        </div>
        {diaryProducts.length === 0 ? (
          <EmptyList listName={"products"} />
        ) : (
          <ProductsTable products={diaryProducts} />
        )}
      </div>
    </div>
  );
};

export default DayProducts;

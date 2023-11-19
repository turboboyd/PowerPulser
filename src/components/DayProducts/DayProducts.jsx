import React from "react";
import css from "./DayProducts.module.css";
import useDiary from "../../hooks/useDiary";

import { PRODUCT_ROUTE } from "../../utils/const";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import ProductsTable from "../ProductsTable/ProductsTable";

import { useSelector } from "react-redux";
import {
  selectDiaryIsLoading,
  selectDiaryProducts,
} from "../../redux/diary/diarySelectors";

const DayProducts = () => {
  const { diaryProducts, diaryIsLoading } = useDiary();
  const products = useSelector(selectDiaryProducts);
  
  return (
    <div className={css.dayProducts}>
      <div className={css.dayScrollWrap}>
        <div className={css.diaryNav}>
          <h3 className={css.diarySubtitle}>Products</h3>
          <ButtonAddItem titleLink="Add product" titleRoute={PRODUCT_ROUTE} />
        </div>
        {products.length === 0 ? (
          <div className={css.notFoundPlugTextWrap}>
            <p className={css.notFoundPlugText}>Not found products</p>
          </div>
        ) : (
          <ProductsTable products={diaryProducts} />
        )}
      </div>
    </div>
  );
};

export default DayProducts;

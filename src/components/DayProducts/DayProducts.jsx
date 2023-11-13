import React from "react";
import css from "./DayProducts.module.css";

import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import ProductsTable from "../ProductsTable/ProductsTable";
import { PRODUCT_ROUTE } from "../../utils/const";
import productsData from "../../RESOURCES/resources/products.json";

const products = productsData.slice(0, 1);

const DayProducts = () => {
  return (
    <>
      <div className={css.dayProducts}>
        <div className={css.diaryNav}>
          <h3 className={css.diarySubtitle}>Products</h3>
          <ButtonAddItem titleLink="Add product" titleRoute={PRODUCT_ROUTE} />
        </div>
        {products.length === 0 ? (
          <div className={css.notFoundPlugTextWrap}>
            <p className={css.notFoundPlugText}>Not found products</p>
          </div>
        ) : (
          <ProductsTable products={products} />
        )}
      </div>
    </>
  );
};

export default DayProducts;

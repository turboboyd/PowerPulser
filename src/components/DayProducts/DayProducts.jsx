import React from "react";
import css from "./DayProducts.module.css";

import { PRODUCT_ROUTE } from "../../utils/const";
import ButtonAddItem from "../ButtonAddItem/ButtonAddItem";
import productsData from "../../RESOURCES/resources/products.json";
import ProductsTable from "../ProductsTable/ProductsTable";

const products = productsData.slice(0, 2);

const DayProducts = () => {
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
          <ProductsTable products={products} />
        )}
      </div>
    </div>
  );
};

export default DayProducts;

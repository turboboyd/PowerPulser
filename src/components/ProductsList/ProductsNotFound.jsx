import css from './ProductsNotFound.module.css';

const ProductsNotFound = () => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.text}>
          <span className={css.warningText}>Sorry, no results were found </span>
          for the product filters you selected. You may want to consider other
          search options to find the product you want. Our range is wide and you
          have the opportunity to find more options that suit your needs.
        </p>
        <p className={css.text}>
          <span className={css.warningText}>
            Try changing the search parameters.
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductsNotFound;

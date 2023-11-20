import Icon from '../ComponIcon/Icon';
import css from './../ExercisesItem/ExercisesItem.module.css';
import { forwardRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BasicModalWindow from '../../components/ModalWindow/BasicModalWindow/BasicModalWindow';
import AddProductForm from '../ModalWindow/AddProductForm/AddProductForm';
import AddProductSuccess from '../ModalWindow/AddProductSuccess/AddProductSuccess';

const ProductsItem = forwardRef(({ product }, ref) => {
  const {
    user: {
      profileSettings: { blood },
    },
  } = useAuth();
  const [modalProduct, setModalProduct] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleModalProduct = () => {
    setModalProduct((state) => !state);
    document.body.classList.toggle('body-scroll-lock');
  };

  const handleModalSuccess = () => {
    setModalSuccess((state) => !state);
    document.body.classList.toggle('body-scroll-lock');
  };

  const handleSelectedProduct = (data) => {
    setSelectedProduct(data);
  };

  return (
    <div className={css.exerciseWrapper} ref={ref}>
      <div className={css.productsCardTopPart}>
        <p className={css.exerciseCardTopDiet}>diet</p>
        {product.groupBloodNotAllowed[blood] ? (
          <div className={css.productRecommended}>
            <p className={css.productRecommendedTrue}></p>
            <p>Recommended</p>
          </div>
        ) : (
          <div className={css.productRecommended}>
            <p className={css.productRecommendedFalse}></p>
            <p>Not recommended</p>
          </div>
        )}
        <button className={css.exerciseArrow} onClick={handleModalProduct}>
          Add
          <Icon className={css.exerciseArrowSvg} iconId="Arrow" />
        </button>
        {modalProduct && (
          <BasicModalWindow handleModalToggle={handleModalProduct}>
            <AddProductForm
              handleModalSuccess={handleModalSuccess}
              handleModalProduct={handleModalProduct}
              product={product}
              handleSelectedProduct={handleSelectedProduct}
            />
          </BasicModalWindow>
        )}
        {modalSuccess && (
          <BasicModalWindow handleModalToggle={handleModalSuccess}>
            <AddProductSuccess
              handleModalSuccess={handleModalSuccess}
              selectedProduct={selectedProduct}
            />
          </BasicModalWindow>
        )}
      </div>
      <div className={css.exerciseName}>
        <Icon className={css.exerciseManSvg} iconId="Runner" />
        <h3 className={css.exerciseNameText}>{product.title}</h3>
      </div>
      <ul className={css.exerciseCardLowPart}>
        <li>
          Calories:
          <span>{product.calories}</span>
        </li>
        <li className={css.productCategory}>
          Category:
          <span className={css.exerciseCardItem}>{product.category}</span>
        </li>
        <li>
          Weight:
          <span className={css.exerciseCardItem}>{product.weight}</span>
        </li>
      </ul>
    </div>
  );
});
export default ProductsItem;

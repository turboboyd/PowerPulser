import css from "./EmptyList.module.css";

const EmptyList = ({ listName }) => {
  return (
    <div className={css.notFoundPlugTextWrap}>
      <p className={css.notFoundPlugText}>Not found {listName}</p>
    </div>
  );
};

export default EmptyList;

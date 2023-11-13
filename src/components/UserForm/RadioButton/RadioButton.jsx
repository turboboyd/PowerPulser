import css from "./RadioButton.module.css";

const RadioOption = ({ id, name, value, checked, label, onChange }) => (
  <div className={css.radio}>
    <input
      className={css.radioInput}
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />

    <label className={css.radioLabel} htmlFor={id}>
      {label}
    </label>
  </div>
);

export default RadioOption;

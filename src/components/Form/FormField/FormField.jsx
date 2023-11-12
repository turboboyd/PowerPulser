import React from "react";
import { Field, ErrorMessage } from "formik";
import Icon from "../../ComponIcon/Icon";
import css from "./FormField.module.css";

const FormField = ({
  fieldName,
  fieldType,
  placeholder,
  formik,
  successMessage,
  isPassword,
}) => (
  <div
    className={`${css.fieldWrapper} ${
      formik.touched[fieldName] && formik.errors[fieldName]
        ? `${css.error}`
        : formik.touched[fieldName] && !formik.errors[fieldName]
        ? `${css.success}`
        : ""
    }`}
  >
    <Field
      className={css.field}
      type={isPassword ? fieldType(formik) : fieldType}
      name={fieldName}
      placeholder={placeholder}
    />

    <div className={css.messageWrapper}>
      <Icon data-status="error" className={css.svgError} iconId={"icon-red"} />

      <ErrorMessage
        className={css.errorMessage}
        name={fieldName}
        component="div"
      />
    </div>

    {formik.touched[fieldName] && !formik.errors[fieldName] && (
      <div className={css.messageWrapper}>
        <Icon
          data-status="error"
          className={css.svgSuccess}
          iconId={"icon-green"}
        />
        <div className={css.successMessage}>{successMessage}</div>
      </div>
    )}
  </div>
);

export default FormField;

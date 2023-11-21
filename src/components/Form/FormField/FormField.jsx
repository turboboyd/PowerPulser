import React from "react";
import PropTypes from 'prop-types';
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
      type={fieldType}
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
          data-status="success"
          className={css.svgSuccess}
          iconId={"icon-green"}
        />
        <div className={css.successMessage}>{successMessage}</div>
      </div>
    )}
  </div>
);


export default FormField;
FormField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};
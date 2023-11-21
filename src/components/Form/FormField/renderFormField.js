import FormField from "./FormField";
import PropTypes from 'prop-types';

const renderFormField = (
  fieldName,
  fieldType,
  placeholder,
  formik,
  successMessage,
  isPassword
) => (
  <FormField
    fieldName={fieldName}
    fieldType={fieldType}
    placeholder={placeholder}
    formik={formik}
    successMessage={successMessage}
    isPassword={isPassword}
  />
);
export default renderFormField;


renderFormField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  isPassword: PropTypes.bool, // optional prop
};
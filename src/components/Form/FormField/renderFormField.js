import FormField from "./FormField";

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

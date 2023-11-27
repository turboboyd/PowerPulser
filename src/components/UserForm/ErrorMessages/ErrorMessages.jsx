import { ErrorMessage } from "formik";
import css from "./ErrorMessages.module.css";

const ErrorMessages = ({nameField}) => {
  return (
    <>
      <ErrorMessage className={css.errorMessage} name={nameField} component="div" />
    </>
  );
};

export default ErrorMessages;

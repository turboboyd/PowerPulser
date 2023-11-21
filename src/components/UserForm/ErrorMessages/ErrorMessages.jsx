import { ErrorMessage } from "formik";
import css from "./ErrorMessages.module.css";

const ErrorMessages = () => {
  return (
    <div>
      <ErrorMessage className={css.errorMessage} name="name" component="div" />
      <ErrorMessage
        className={css.errorMessage}
        name="height"
        component="div"
      />
      <ErrorMessage
        className={css.errorMessage}
        name="currentWeight"
        component="div"
      />

      <ErrorMessage
        className={css.errorMessage}
        name="desiredWeight"
        component="div"
      />
      <ErrorMessage
        className={css.errorMessage}
        name="birthday"
        component="div"
      />
    </div>
  );
};

export default ErrorMessages;

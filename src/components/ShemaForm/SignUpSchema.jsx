import * as Yup from "yup";
import { emailRegex, passwordRegex } from "./Regex";



const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required field"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Required field"),
  password: Yup.string()
    .matches(passwordRegex, "Must contain at least 1 capital and 1 digit")
    .required("Required field"),
});

export default SignUpSchema;

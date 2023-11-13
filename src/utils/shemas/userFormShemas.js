import * as yup from "yup";

const userFormShemas = yup.object({
  name: yup.string().required("Name is required"),
  height: yup
    .number("Number")
    .typeError("Must be a number")
    .positive("Must be positive.")
    .min(150, "Must be at least 150cm")
    .required("Height is required"),
  currentWeight: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be positive.")
    .min(35, "Must be at least 35kg")
    .required("Current weight is required"),
  desiredWeight: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be positive.")
    .min(35, "Must be at least 35kg")
    .required("Desired weight is required"),
  birthday: yup.date().required("Birthday is required"),
});

export default userFormShemas;

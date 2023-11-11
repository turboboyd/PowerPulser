import { Formik, Field, Form } from "formik";
// import * as yup from "yup";

import css from "./UserForm.module.css";
import Button from "../Button/Button";
import RadioButton from "./RadioButton/RadioButton";

const UseForm = () => {
  const initialValues = {
    name: "Anna Rybachok",
    email: "annarybachok@gmail.com",
    height: "0",
    currentWeight: "0",
    desiredWeight: "0",
    blood: "",
    sex: "",
    levelActivity: "0",
    birthday: "2002-01-01",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <Form>
            <div className={css.formWrapper}>
              <div>
                <p className={css.titleName}></p>
                <Field
                  className={css.input}
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Field
                  className={css.input}
                  type="text"
                  name="email"
                  // defaultValue={user.email}
                  readOnly
                  disabled
                />
              </div>
            </div>

            {/* input Field */}
            <div className={css.inputWrapper}>
              <div>
                <Field type="number" name="height" id="height" placeholder="" />
                <label htmlFor="height">Height</label>
              </div>

              <div>
                <Field
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  placeholder=""
                />
                <label htmlFor="currentWeight">Current Weight</label>
              </div>
            </div>

            <div className={css.inputWrapper}>
              <div>
                {" "}
                <Field
                  type="number"
                  name="desiredWeight"
                  id="desiredWeight"
                  placeholder=""
                />
                <label htmlFor="desiredWeight">Desired Weight</label>
              </div>

              <div>
                <Field type="date" name="birthday" id="birthday" />
                <label htmlFor="date">Birthday</label>
              </div>
            </div>

            {/* RadioButton */}
            <div className={css.radioWrapper}>
              <div>
                <div>
                  <RadioButton
                    name="blood"
                    value="1"
                    id="1"
                    label="1"
                    checked={formik.values.blood === "1"}
                    onChange={() => formik.setFieldValue("blood", "1")}
                  />

                  <RadioButton
                    name="blood"
                    value="2"
                    id="2"
                    label="2"
                    checked={formik.values.blood === "2"}
                    onChange={() => formik.setFieldValue("blood", "2")}
                  />

                  <RadioButton
                    name="blood"
                    value="3"
                    id="3"
                    label="3"
                    checked={formik.values.blood === "3"}
                    onChange={() => formik.setFieldValue("blood", "3")}
                  />

                  <RadioButton
                    name="blood"
                    value="4"
                    id="4"
                    label="4"
                    checked={formik.values.blood === "4"}
                    onChange={() => formik.setFieldValue("blood", "4")}
                  />
                </div>

                <div>
                  <RadioButton
                    name="sex"
                    id="male"
                    value="male"
                    label="Male"
                    checked={formik.values.sex === "male"}
                    onChange={() => formik.setFieldValue("sex", "male")}
                  />
                  <RadioButton
                    name="sex"
                    id="female"
                    value="female"
                    label="Female"
                    checked={formik.values.sex === "female"}
                    onChange={() => formik.setFieldValue("sex", "female")}
                  />
                </div>
              </div>

              {/* levelActively */}
              <div className={css.levelActivityWrapper}>
                <RadioButton
                  name="levelActivity"
                  id="levelActivity1"
                  value="1"
                  label="Sedentary lifestyle (little or no physical activity)"
                  checked={formik.values.levelActivity === "1"}
                  onChange={() => formik.setFieldValue("levelActivity", "1")}
                />
                <RadioButton
                  name="levelActivity"
                  value="2"
                  id="levelActivity2"
                  label="Light activity (light exercises/sports 1-3 days per week)"
                  checked={formik.values.levelActivity === "2"}
                  onChange={() => formik.setFieldValue("levelActivity", "2")}
                />
                <RadioButton
                  name="levelActivity"
                  value="3"
                  id="levelActivity3"
                  label="Moderately active (moderate exercises/sports 3-5 days per week)"
                  checked={formik.values.levelActivity === "3"}
                  onChange={() => formik.setFieldValue("levelActivity", "3")}
                />
                <RadioButton
                  name="levelActivity"
                  value="4"
                  id="levelActivity4"
                  label="Very active (intense exercises/sports 6-7 days per week)"
                  checked={formik.values.levelActivity === "4"}
                  onChange={() => formik.setFieldValue("levelActivity", "4")}
                />
                <RadioButton
                  name="levelActivity"
                  value="5"
                  id="levelActivity5"
                  label="Extremely active (very strenuous exercises/sports and physical
                work)"
                  checked={formik.values.levelActivity === "5"}
                  onChange={() => formik.setFieldValue("levelActivity", "5")}
                />
              </div>
            </div>

            <Button type="submit" text="Save" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UseForm;

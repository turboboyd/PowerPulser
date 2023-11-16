import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./UserForm.module.css";
import Button from "../Button/Button";
import RadioButton from "./RadioButton/RadioButton";
import userFormShemas from "../../utils/shemas/userFormShemas";
import { updateProfileSettings } from "../../redux/auth/authOperation";
import { selectUser } from "../../redux/auth/authSelectors";
import CalendarComponent from "../СalendarBirthDay/СalendarBirthDay";

const UseForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { name, profileSettings } = user;
  const {
    height = 0,
    currentWeight = 0,
    desiredWeight = 0,
    blood = 0,
    sex = "",
    levelActivity = 0,
  } = profileSettings || {};

  const initialValues = {
    name,
    height,
    currentWeight,
    desiredWeight,
    birthday: profileSettings
      ? new Date(profileSettings.birthday).toISOString()
      : "2000-01-01",
    blood,
    sex: sex.toString(),
    levelActivity,
  };

  const handleSubmit = ({
    name,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  }) => {
    const data = {
      name,
      profileSettings: {
        height,
        currentWeight,
        desiredWeight,
        birthday: new Date(birthday).toISOString(),
        blood,
        sex,
        levelActivity,
      },
    };
    dispatch(updateProfileSettings(data));

    console.log(data);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userFormShemas}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className={css.formWrapper}>
              <div>
                <p className={css.titleName}>Basic info</p>
                <Field
                  className={css.input}
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Field
                  className={`${css.input} ${css.inputEmail}`}
                  type="text"
                  name="email"
                  readOnly
                  disabled
                />
              </div>
            </div>
            {/* input Field */}{" "}
            <div className={css.inputContainer}>
              <div className={css.inputWrapper}>
                <div className={css.fieldContainer}>
                  <label className={css.labelInput} htmlFor="height">
                    Height
                  </label>
                  <Field
                    className={css.field}
                    type="number"
                    name="height"
                    id="height"
                    placeholder=""
                  />
                </div>

                <div className={css.fieldContainer}>
                  <label className={css.labelInput} htmlFor="currentWeight">
                    Current Weight
                  </label>
                  <Field
                    className={css.field}
                    type="number"
                    name="currentWeight"
                    id="currentWeight"
                    placeholder=""
                  />
                </div>
              </div>

              <div className={css.inputWrapper}>
                <div className={css.fieldContainer}>
                  <label className={css.labelInput} htmlFor="desiredWeight">
                    Desired Weight
                  </label>
                  <Field
                    className={css.field}
                    type="number"
                    name="desiredWeight"
                    id="desiredWeight"
                    placeholder=""
                  />
                </div>

                <div className={css.fieldContainer}>
                  <label className={css.labelInput} htmlFor="birthday">
                    Birthday
                  </label>
                  {/* <CalendarComponent
                    minDate={new Date("1900-01-01")}
                    selected={formik.values.birthday}
                    onBirthdayChange={(date) =>
                      formik.setFieldValue("birthday", date)
                    }
                  /> */}
                  <Field
                    className={css.field}
                    type="date"
                    name="birthday"
                    id="birthday"
                  />
                </div>
              </div>
            </div>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="div"
            />
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
            {/* RadioButton */}
            <p className={`${css.titleName} ${css.titleBlood}`}>Blood</p>
            <div className={css.radioWrapper}>
              <div className={css.radioContainer}>
                <div className={css.radioBloodContainer}>
                  <RadioButton
                    name="blood"
                    value={1}
                    id="1"
                    label="1"
                    checked={formik.values.blood === 1}
                    onChange={() => formik.setFieldValue("blood", 1)}
                  />

                  <RadioButton
                    name="blood"
                    value={2}
                    id="2"
                    label="2"
                    checked={formik.values.blood === 2}
                    onChange={() => formik.setFieldValue("blood", 2)}
                  />

                  <RadioButton
                    name="blood"
                    value={3}
                    id="3"
                    label="3"
                    checked={formik.values.blood === 3}
                    onChange={() => formik.setFieldValue("blood", 3)}
                  />

                  <RadioButton
                    name="blood"
                    value={4}
                    id="4"
                    label="4"
                    checked={formik.values.blood === 4}
                    onChange={() => formik.setFieldValue("blood", 4)}
                  />
                </div>
                <div className={css.radioSexContainer}>
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
                  value={1}
                  label="Sedentary lifestyle (little or no physical activity)"
                  checked={formik.values.levelActivity === 1}
                  onChange={() => formik.setFieldValue("levelActivity", 1)}
                />
                <RadioButton
                  className={css.levelInput}
                  name="levelActivity"
                  value={2}
                  id="levelActivity2"
                  label="Light activity (light exercises/sports 1-3 days per week)"
                  checked={formik.values.levelActivity === 2}
                  onChange={() => formik.setFieldValue("levelActivity", 2)}
                />
                <RadioButton
                  name="levelActivity"
                  value={3}
                  id="levelActivity3"
                  label="Moderately active (moderate exercises/sports 3-5 days per week)"
                  checked={formik.values.levelActivity === 3}
                  onChange={() => formik.setFieldValue("levelActivity", 3)}
                />
                <RadioButton
                  name="levelActivity"
                  value={4}
                  id="levelActivity4"
                  label="Very active (intense exercises/sports 6-7 days per week)"
                  checked={formik.values.levelActivity === 4}
                  onChange={() => formik.setFieldValue("levelActivity", 4)}
                />
                <RadioButton
                  name="levelActivity"
                  value={5}
                  id="levelActivity5"
                  label="Extremely active (very strenuous exercises/sports and physical
                work)"
                  checked={formik.values.levelActivity === 5}
                  onChange={() => formik.setFieldValue("levelActivity", 5)}
                />
              </div>
            </div>
            <Button className={css.buttonSave} type="submit" text="Save" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UseForm;

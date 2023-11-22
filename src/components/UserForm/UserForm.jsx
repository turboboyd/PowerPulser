import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import RadioButton from './RadioButton/RadioButton';
import ErrorMessages from './ErrorMessages/ErrorMessages';
import CalendarComponent from '../СalendarBirthDay/СalendarBirthDay';

import userFormShemas from '../../utils/shemas/userFormShemas';
import { updateProfileSettings } from '../../redux/auth/authOperation';
import useAuth from '../../hooks/useAuth';

import css from './UserForm.module.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const { name, profileSettings, isLoading } = user;
  const {
    height = 0,
    currentWeight = 0,
    desiredWeight = 0,
    blood = 0,
    sex = '',
    levelActivity = 0,
  } = profileSettings || {};

  const birthdayDate = profileSettings
    ? new Date(profileSettings.birthday)
    : new Date('2022-01-01');

  const formattedBirthday = `${birthdayDate.getFullYear()}-${String(
    birthdayDate.getMonth() + 1
  ).padStart(2, '0')}-${String(birthdayDate.getDate()).padStart(2, '0')}`;

  const initialValues = {
    name,
    height,
    email: user.email,
    currentWeight,
    desiredWeight,
    birthday: formattedBirthday,
    blood,
    sex: sex.toString(),
    levelActivity,
  };

  const handleSubmit = values => {
    const data = {
      name: values.name,
      profileSettings: {
        height: values.height,
        currentWeight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        birthday: new Date(values.birthday).toISOString(),
        blood: values.blood,
        sex: values.sex,
        levelActivity: values.levelActivity,
      },
    };
    dispatch(updateProfileSettings(data));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userFormShemas}
        onSubmit={handleSubmit}
      >
        {formik => (
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
            {/* input Field */}{' '}
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

                <div
                  className={css.fieldContainer}
                  style={{ position: 'relative' }}
                >
                  <label className={css.labelInput} htmlFor="birthday"></label>
                  <CalendarComponent
                    minDate={new Date('1900-01-01')}
                    selected={formik.values.birthday}
                    onBirthdayChange={date =>
                      formik.setFieldValue('birthday', date)
                    }
                  />
                </div>
              </div>
            </div>
            <ErrorMessages />
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
                    onChange={() => formik.setFieldValue('blood', 1)}
                  />

                  <RadioButton
                    name="blood"
                    value={2}
                    id="2"
                    label="2"
                    checked={formik.values.blood === 2}
                    onChange={() => formik.setFieldValue('blood', 2)}
                  />

                  <RadioButton
                    name="blood"
                    value={3}
                    id="3"
                    label="3"
                    checked={formik.values.blood === 3}
                    onChange={() => formik.setFieldValue('blood', 3)}
                  />

                  <RadioButton
                    name="blood"
                    value={4}
                    id="4"
                    label="4"
                    checked={formik.values.blood === 4}
                    onChange={() => formik.setFieldValue('blood', 4)}
                  />
                </div>
                <div className={css.radioSexContainer}>
                  <RadioButton
                    name="sex"
                    id="male"
                    value="male"
                    label="Male"
                    checked={formik.values.sex === 'male'}
                    onChange={() => formik.setFieldValue('sex', 'male')}
                  />
                  <RadioButton
                    name="sex"
                    id="female"
                    value="female"
                    label="Female"
                    checked={formik.values.sex === 'female'}
                    onChange={() => formik.setFieldValue('sex', 'female')}
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
                  onChange={() => formik.setFieldValue('levelActivity', 1)}
                />
                <RadioButton
                  className={css.levelInput}
                  name="levelActivity"
                  value={2}
                  id="levelActivity2"
                  label="Light activity (light exercises/sports 1-3 days per week)"
                  checked={formik.values.levelActivity === 2}
                  onChange={() => formik.setFieldValue('levelActivity', 2)}
                />
                <RadioButton
                  name="levelActivity"
                  value={3}
                  id="levelActivity3"
                  label="Moderately active (moderate exercises/sports 3-5 days per week)"
                  checked={formik.values.levelActivity === 3}
                  onChange={() => formik.setFieldValue('levelActivity', 3)}
                />
                <RadioButton
                  name="levelActivity"
                  value={4}
                  id="levelActivity4"
                  label="Very active (intense exercises/sports 6-7 days per week)"
                  checked={formik.values.levelActivity === 4}
                  onChange={() => formik.setFieldValue('levelActivity', 4)}
                />
                <RadioButton
                  name="levelActivity"
                  value={5}
                  id="levelActivity5"
                  label="Extremely active (very strenuous exercises/sports and physical
                work)"
                  checked={formik.values.levelActivity === 5}
                  onChange={() => formik.setFieldValue('levelActivity', 5)}
                />
              </div>
            </div>
            <Button
              className={css.buttonSave}
              type="submit"
              text="Save"
              disabled={
                isLoading ||
                !formik.isValid ||
                !formik.dirty ||
                !formik.values.blood ||
                !formik.values.sex ||
                !formik.values.levelActivity
              }
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;

UserForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profileSettings: PropTypes.shape({
      height: PropTypes.number.isRequired,
      currentWeight: PropTypes.number.isRequired,
      desiredWeight: PropTypes.number.isRequired,
      birthday: PropTypes.string.isRequired,
      blood: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
      levelActivity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

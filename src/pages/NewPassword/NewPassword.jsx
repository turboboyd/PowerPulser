// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Logo from '../../components/Logo/Logo';
// import TitlePage from '../../components/TitlePage/TitlePage';
// import css from './NewPassword.module.css';
// import AuthForm from ''


// const NewPassword = () => {
//   const history = useHistory();
//   const [error, setError] = useState('');

//   const initialValues = {
//     newPassword: '',
//     confirmPassword: '',
//   };

//   const validationSchema = Yup.object().shape({
//     newPassword: Yup.string()
//       .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Must contain at least 1 capital and 1 digit'
//       )
//       .required('Required field'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
//       .required('Required field'),
//   });

//   const handleSubmit = async (values) => {
//     const { newPassword, confirmPassword } = values;

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       // Call your resetPassword function here
//       // Replace 'userData' with any additional data you need to send to your server
//       const userData = { newPassword, confirmPassword }; // Add any additional data needed
//     //   const response = await resetPassword(userData);

//        console.log(response); // You can customize this based on your backend response

//       history.push('/password-reset-success');
//     } catch (error) {
//       setError('An error occurred while resetting the password');
//     }
//   };

//   return (
//     <>
//       <Logo />
//       <TitlePage title="Change the password" />
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className={css.form}>
//           <label className={css.label}>New Password:</label>
//           <Field
//             type="password"
//             name="newPassword"
//             placeholder="Enter your new password"
//           />
//           <ErrorMessage
//             name="newPassword"
//             component="div"
//             className="errorText"
//           />
//           <label className={css.label}>Confirm Password:</label>
//           <Field
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//           />
//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className={css.errorText}
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button type="submit" className={css.button}>
//             <span className={css.buttonText}> Reset Password</span>
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default NewPassword;

// // ================== reset function

// // export const resetPassword = createAsyncThunk(
// //   'auth/resetPassword',
// //   async (userData, thunkAPI) => {
// //     try {
// //        const response = await instance.post(
// //         '/api/users/changePassword/',
// //         userData
// //       );

// //       // Return the data from the response (customize this based on your API response structure)
// //       return response.data;
// //     } catch (error) {
// //       // If there's an error, reject the promise with the error message
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
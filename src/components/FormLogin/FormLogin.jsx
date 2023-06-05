import { Label, SubmitForm, Box, Login, Input } from '../FormLogin/FormLogin.styled';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { logIn } from 'redux/auth/authOperations';


const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function FormLogin() {
  const dispatch = useDispatch();

  const onSubmitInner = (value, { resetForm }) => {
    dispatch(logIn(value));
    resetForm();
  };

  return (
    <Box>
      <Login>Login</Login>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmitInner}
      >
        {({ errors, touched, isValid, dirty }) => (
          <SubmitForm>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter email number"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password"
            />

            <Button type="submit" variant="contained" sx={{ marginTop: 2 }} fullWidth>
              Login
            </Button>
          </SubmitForm>
        )}
      </Formik>
    </Box>
  );
}
FormLogin.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

// import { Form, Label, Input, Button } from '../FormContact/FormContact.styled'
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch} from 'react-redux';
// import { logIn } from 'redux/auth/authOperations';

// export default function FormLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleClickChange = e => {
//     const { name, value} = e.currentTarget;
//     if (name === 'email') {
//       setEmail(value);
//       return;
//     }
//     if (name === 'password') {
//     }
//     setPassword(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(logIn({email, password}));
//     resetForm();
//   };

//   const resetForm = e => {
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Label>
//           <Input
//             type="text"
//             name="email"
//             value={email}
//             onChange={handleClickChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             placeholder="Enter email"
//             required
//           />
//         </Label>
//         <Label>
//           <Input
//             type="tel"
//             name="password"
//             value={password}
//             onChange={handleClickChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             placeholder="Enter password"
//             required
//           />
//         </Label>

//         <Button type="submit">SubmitLogin</Button>
//       </Form>
//     </>
//   );
// }

// FormLogin.propTypes = {
//  email: PropTypes.string,
//   password: PropTypes.string,
// };

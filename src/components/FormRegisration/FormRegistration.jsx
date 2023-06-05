import { Label, SubmitForm, Box, Input } from '../FormLogin/FormLogin.styled';
import { Registrarion } from './FormRegistration.styled';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const schema = Yup.object().shape({
  name: Yup.string().min(3).max(16).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function FormRegistration() {
  const dispatch = useDispatch();

  const onSubmitInner = (value, { resetForm }) => {
    dispatch(register(value));
    resetForm();
  };

  return (
    <Box>
      <Registrarion>Registration</Registrarion>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmitInner}
      >
        {({ errors, touched, isValid, dirty }) => (
          <SubmitForm>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter Name" />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter email"
              fullWidth
            />
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" placeholder="Enter password" />

            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2 }}
              fullWidth
            >
              Login
            </Button>
          </SubmitForm>
        )}
      </Formik>
    </Box>
  );
}
FormRegistration.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

// import { Form, Label, Input, Button } from '../FormContact/FormContact.styled';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

// export default function FormRegistration() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleClickChange = e => {
//     const { name, value } = e.currentTarget;
//     if (name === 'name') {
//       setName(value);
//       return;
//     }
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
//     dispatch(register({name, email,password}));
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
//             name="name"
//             value={name}
//             onChange={handleClickChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             placeholder="Enter name"
//             required
//           />
//         </Label>
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

//         <Button type="submit">SubmitUser</Button>
//       </Form>
//     </>
//   );
// }

// FormRegistration.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
//   password: PropTypes.string,
// };

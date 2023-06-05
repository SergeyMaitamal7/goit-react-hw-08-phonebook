import { Form, Box, Container } from '../FormLogin/FormLogin.styled';
import { Registrarion } from './FormRegistration.styled';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(16).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});

export default function FormRegistration() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <Box>
      <Container>
        <Registrarion>Register</Registrarion>
      </Container>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          placeholder="Enter your name"
          margin="none"
          fullWidth
          sx={{
            height: 50,
            marginBottom: 3,
          }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          margin="none"
          fullWidth
          sx={{
            height: 50,
            marginBottom: 3,
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          margin="none"
          fullWidth
          sx={{
            height: 50,
            marginBottom: 3,
          }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </Form>
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

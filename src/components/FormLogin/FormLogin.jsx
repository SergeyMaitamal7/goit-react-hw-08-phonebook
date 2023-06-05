import { Form, Box, Login, Container } from '../FormLogin/FormLogin.styled';
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/authOperations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});

export default function FormLogin() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(logIn( values));
    },
  });

  return (
    <Box>
      <Container>
        <Login>Login</Login>
      </Container>
      <Form onSubmit={formik.handleSubmit}>
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
          sx={{ height: 50, marginBottom: 3 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Login
        </Button>
      </Form>
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

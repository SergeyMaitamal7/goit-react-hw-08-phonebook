import {
  Label,
  Input,
  Button,
  SubmitForm,
  ErrorMessage,
  Box,
} from '../FormContact/FormContact.styled';
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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitInner}
    >
      {({ errors, touched, isValid, dirty }) => (
        <SubmitForm>
          <Label htmlFor="name">name</Label>
          <Box>
            <Input id="name" name="name" placeholder="Enter Name" />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </Box>

          <Label htmlFor="email">email</Label>
          <Box>
            {' '}
            <Input id="email" name="email" placeholder="Enter email" />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </Box>
          <Label htmlFor="password">password</Label>
          <Box>
            <Input id="password" name="password" placeholder="Enter password" />
            {errors.password && touched.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </Box>
          <Button type="submit" disabled={!isValid || !dirty}>
            Submit
          </Button>
        </SubmitForm>
      )}
    </Formik>
  );
}
FormRegistration.propTypes = {
  name: PropTypes.string,
  email: PropTypes.number,
  password: PropTypes.string,
};

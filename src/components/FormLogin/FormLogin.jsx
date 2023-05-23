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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitInner}
    >
      {({ errors, touched, isValid, dirty }) => (
        <SubmitForm>
          <Label htmlFor="email">email</Label>
          <Box>
            {' '}
            <Input id="email" name="email" placeholder="Enter email number" />
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
FormLogin.propTypes = {
  name: PropTypes.string,
  email: PropTypes.number,
};

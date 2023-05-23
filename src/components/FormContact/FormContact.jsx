import {
  Label,
  Input,
  Button,
  SubmitForm,
  ErrorMessage,
  Box,
} from './FormContact.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/operation';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

const schema = Yup.object().shape({
  name: Yup.string().email().required(),
  phone: Yup.string().min(6).max(32).required(),
});

const initialValues = {
  name: '',
  phone: '',
};

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = ({ name, phone }) => {
    const filterName = contacts.find(contact => contact.name === name);
    if (filterName) {
      Notiflix.Notify.failure(
        `You have already added ${name} to Contact list!!!`
      );
      return;
    }
    dispatch(
      addContact({
        id: nanoid(4),
        name: name,
        phone: phone,
      })
    );
  };

  const onSubmitInner = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validations={schema}
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

          <Label htmlFor="phone">number</Label>
          <Box>
            {' '}
            <Input id="phone" name="phone" placeholder="Enter phone number" />
            {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
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
ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};

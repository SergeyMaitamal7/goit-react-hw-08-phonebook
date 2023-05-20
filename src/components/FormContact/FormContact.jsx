import {
  Label,
  Input,
  Button,
  SubmitForm,
  ErrorMessage,
  Box,
} from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/operation';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

function validateName(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    error = 'Invalid name';
  }
  return error;
}
function validateNumber(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/[0-9]{10}/i.test(value)) {
    error = 'Invalid number';
  }
  return error;
}

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
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
    <Formik initialValues={initialValues} onSubmit={onSubmitInner}>
      {({ errors, touched, isValid, dirty }) => (
        <SubmitForm>
          <Label htmlFor="name">name</Label>
          <Box>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              validate={validateName}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </Box>

          <Label htmlFor="phone">number</Label>
          <Box>
            {' '}
            <Input
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              validate={validateNumber}
            />
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
};
ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};

// import { Form, Label, Input, Button } from './FormContact.styled';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
// import Notiflix from 'notiflix';

// export const ContactForm = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleClickChange = e => {
//     const { name, value } = e.currentTarget;
//     if (name === 'name') {
//       setName(value);
//       return;
//     }
//     if (name === 'number') {
//     }
//     setNumber(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const filterName = contacts.find(contact => contact.name === name);
//     if (filterName) {
//       Notiflix.Notify.failure(
//         `You have already added ${name} to Contact list!!!`
//       );
//       resetForm();
//       return;
//     }
//     dispatch(
//       addContact({
//         name: name,
//         number: number,
//       })
//     );
//     resetForm();
//   };

//   const resetForm = e => {
//     setName('');
//     setNumber('');
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
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleClickChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>

//         <Button type="submit">Add Contact</Button>
//       </Form>
//     </>
//   );
// };
// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };

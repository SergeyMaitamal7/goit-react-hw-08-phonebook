import { Container, Form, Label, Input, Box } from './FormContact.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/operation';
import Notiflix from 'notiflix';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleClickChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
    }
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filterName = contacts.find(contact => contact.name === name);
    if (filterName) {
      Notiflix.Notify.failure(
        `You have already added ${name} to Contact list!!!`
      );
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
    resetForm();
  };

  const resetForm = e => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={handleClickChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          onChange={handleClickChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Box>
          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </Box>
      </Form>
    </Container>
  );
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

// import {
//   Label,
//   Input,
//   Button,
//   SubmitForm,
//   ErrorMessage,
//   Box,
// } from '../FormContact/FormContact.styled';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/selector';
// import { addContact } from 'redux/contacts/operation';
// import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';
// import { Formik } from 'formik';

// const initialValues = {
//   name: '',
//   number: '',
// };
// const schema = Yup.object().shape({
//   name: Yup.string().email().required(),
//   number: Yup.string().min(6).max(32).required(),
// });

// export default function ContactForm() {
//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const onSubmit = ({ name, number }) => {
//     const filterName = contacts.find(contact => contact.name === name);
//     if (filterName) {
//       Notiflix.Notify.failure(
//         `You have already added ${name} to Contact list!!!`
//       );
//       return;
//     }
//     dispatch(
//       addContact({
//         name,
//         number,
//       })
//     );
//   };

//   const onSubmitInner = (value, { resetForm }) => {
//     onSubmit(value);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validations={schema}
//       onSubmit={onSubmitInner}
//     >
//       {({ errors, touched, isValid, dirty }) => (
//         <SubmitForm>
//           <Label htmlFor="name">name</Label>
//           <Box>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter Name"
//               required
//             />
//             {errors.name && touched.name && (
//               <ErrorMessage>{errors.name}</ErrorMessage>
//             )}
//           </Box>

//           <Label htmlFor="number"> number</Label>
//           <Box>
//             {' '}
//             <Input
//               type="tel"
//               id=" number"
//               name=" number"
//               placeholder="Enter phone number"
//               required
//             />
//             {errors.number && touched.number && (
//               <ErrorMessage>{errors.number}</ErrorMessage>
//             )}
//           </Box>
//           <Button type="submit" disabled={!isValid || !dirty}>
//             Submit
//           </Button>
//         </SubmitForm>
//       )}
//     </Formik>
//   );
// }

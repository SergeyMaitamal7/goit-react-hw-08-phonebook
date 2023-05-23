import ItemContact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operation';
import { List, Button, Wrapper } from './RenderContacts.styled';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/contacts/selector';

export default function RenderContacts() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <Wrapper key={contact.id}>
          <ItemContact contact={contact}></ItemContact>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Wrapper>
      ))}
    </List>
  );
}

RenderContacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

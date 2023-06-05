import { Contact } from './Contact.styled';
import PropTypes from 'prop-types';

export default function ItemContact ({ contact }) {
 console.log(contact)
  return (
    <>
      <Contact type="button" name={contact.name}>
        {contact.name} : {contact.number}
      </Contact>
    </>
  );
};

ItemContact.prototype = {
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

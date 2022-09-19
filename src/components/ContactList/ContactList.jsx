import PropTypes from "prop-types";
import { ContactListItem, ContactListButton } from './ContactList.styled';

const ContactList = ({ contacts, seek, handleDelete }) => {
  return (
    <ul>
      {contacts
        .filter((c) => {
          return c.name.toLowerCase().indexOf(seek.toLowerCase()) > -1
        })
      .map(contact => (
          <ContactListItem  key={contact.id}><span>{contact.name}: {contact.number}</span>
            <ContactListButton type="button" onClick={() => handleDelete(contact.id)}>Delete</ContactListButton>
          </ContactListItem>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  seek: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
}

export default ContactList;
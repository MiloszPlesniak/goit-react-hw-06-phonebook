import ListElement from 'components/ListElement/ListElement';
import SearchFilter from 'components/SearchFilter/SearchFilter';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContact } from 'components/feture/contactsSlice';

const ContactList = () => {
  const contact = useSelector(selectContact).contacts;
  const filter = useSelector(selectContact).filter;

  const handlefilteredContacts = () => {
    const filtredContacts = contact.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return filtredContacts;
  };
console.log(filter);
  return (
    <div>
      <h2>Contact</h2>
      <SearchFilter></SearchFilter>
      <ul>
        {handlefilteredContacts().map(item => (
          <ListElement key={item.id} singleContact={item} />
        ))}
      </ul>
    </div>
  );
};
// ContactList.propTypes = {
//   title: PropTypes.string,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   handleDeleteContact: PropTypes.func,
// };
export default ContactList;

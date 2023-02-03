import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/feture/contactsSlice';
// import PropTypes from 'prop-types';

const ListElement = ({ singleContact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{singleContact.name}</span>
      <span> {singleContact.number}</span>
      <button
        onClick={() => {
          dispatch(deleteContact(singleContact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

// ListElement.propTypes = {
//   contactsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   handleDeleteContact: PropTypes.func,
// };
export default ListElement;

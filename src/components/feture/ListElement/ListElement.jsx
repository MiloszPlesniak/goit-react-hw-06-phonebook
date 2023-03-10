import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

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

ListElement.propTypes = {
  singleContact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
export default ListElement;

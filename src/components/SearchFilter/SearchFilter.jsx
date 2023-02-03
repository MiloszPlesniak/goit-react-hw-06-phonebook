import PropTypes from 'prop-types';
import { changeFilter } from 'components/feture/contactsSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const input = useRef(null);
  return (
    <input
      ref={input}
      type="text"
      name="Search"
      onChange={() => {
        dispatch(changeFilter(input.current.value));
      }}
    />
  );
};

SearchFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchFilter;

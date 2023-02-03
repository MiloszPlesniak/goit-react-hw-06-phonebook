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

export default SearchFilter;


// import { useSelector, useDispatch } from 'react-redux';
// import {selectContact} from './feture/contactsSlice';





import ContactList from 'components/ContactList/ContactList';
import AddingContacts from 'components/AddingContacts/AddingContacts';

export const App = () => {
  
  return (
    <div>
      <AddingContacts/>
      <ContactList/>
    </div>
  );
};

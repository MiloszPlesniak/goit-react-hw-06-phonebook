import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './feture/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
// 

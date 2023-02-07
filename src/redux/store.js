import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ filter: filterReducer, contacts: contactsReducer })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor=persistStore(store)


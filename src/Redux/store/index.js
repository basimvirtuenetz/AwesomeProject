import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {personReducer} from '../Slices/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import themeSlice from '../Slices/themeSlice';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: personReducer,
  theme: themeSlice,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
export const persister = persistStore(store);

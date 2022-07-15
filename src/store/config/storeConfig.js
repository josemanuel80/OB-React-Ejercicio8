import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducer';

export const createAppStore = () => {
  let store = configureStore({ reducer: rootReducer });
  return store;
};

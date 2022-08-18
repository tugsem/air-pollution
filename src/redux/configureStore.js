import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  cities: cityReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export default store;

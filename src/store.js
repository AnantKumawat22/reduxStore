import { configureStore } from '@reduxjs/toolkit';
import indexReducers from './reducers/indexReducers';

const store = configureStore({reducer: indexReducers});

export default store
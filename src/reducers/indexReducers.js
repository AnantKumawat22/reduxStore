import { combineReducers } from 'redux';
import inpTextChange from './inputChnage';

const indexReducers = combineReducers({ input: inpTextChange });

export default indexReducers
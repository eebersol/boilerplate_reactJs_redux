import { combineReducers } from 'redux';
import exempleReducer from './exempleReducer';

export default combineReducers({
  context : exempleReducer
});
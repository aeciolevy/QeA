// All reducers 
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as flashReducer } from 'redux-flash';
import db from './reducer-questions';

const rootReducer = combineReducers({
  db,
  form: formReducer,
  flash: flashReducer
});

export default rootReducer;

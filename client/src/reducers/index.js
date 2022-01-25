import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import scopeReducer from './scopeReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  scopes: scopeReducer
});
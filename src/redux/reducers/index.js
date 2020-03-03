import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

export default combineReducers({
  auth: loginReducer,
  signUp: signUpReducer
});

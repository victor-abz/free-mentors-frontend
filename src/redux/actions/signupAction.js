import { signupService } from '../../utils/authService';

import { USER_SIGNUP } from './actionTypes';


export const signUp = (data) => dispatch =>
  dispatch({
    type: USER_SIGNUP,
    payload: signupService(data),
  });

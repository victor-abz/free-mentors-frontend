import { loginUserService } from '../../utils/authService';

import { SESSION_LOGIN } from './actionTypes';


export const login = ({ email, password }) => dispatch =>
  dispatch({
    type: SESSION_LOGIN,
    payload: loginUserService({ email, password }),
  });

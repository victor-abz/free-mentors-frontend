import http from './http';

export const loginUserService = data => {
  const response = http.post('/api/v2/auth/login', data)

  return response;
};

export const signupService = data => {
  const response = http.post('/api/v2/auth/signup', data)

  return response;
};

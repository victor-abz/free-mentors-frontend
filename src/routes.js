/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from './views/Login';
import NotFound from './views/Notfound';
import Mentors from './views/Mentors';
import Auth from './layout/auth/AuthLayout';
import Register from './views/Signup';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/login" />
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/auth',
    component: Auth,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: Login
      },
      {
        path: '/auth/register',
        exact: true,
        component: Register
      }
    ]
  },
  {
    path: '/mentors',
    exact: true,
    component: Mentors
  },
  {
    path: '/errors/error-404',
    exact: true,
    component: NotFound
  },
  {
    component: () => <Redirect to="/errors/error-404" />
  }
];

export default routes;

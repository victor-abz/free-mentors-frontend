import React from 'react';
import './app.scss';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import jwtDecode from 'jwt-decode';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from './redux/store';
import { createBrowserHistory } from 'history';
// import { setCurrentUser } from './redux/actions/loginAction';
// import http from './services/httpService';
import routes from './routes';

// library.add(fab);
const store = configureStore();
const history = createBrowserHistory();

// if (localStorage.token) {
//   const user = jwtDecode(localStorage.token);
//   if (window.location.pathname === '/login') {
//     window.location.href = '/dashboard';
//     store.dispatch(setCurrentUser(http.get('/api/users/view-profile')));
//   }
//   store.dispatch(setCurrentUser(http.get('/api/users/view-profile')));
//   const currentTime = Date.now() / 1000;
//   if (user.exp < currentTime) {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     window.location.href = '/login';
//   }
// }

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0074D9'
    },
    secondary:{
      main: '#4e9b40'
    }
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #fff inset',
          WebkitTextFillColor: '#000000'
        }
      }
    }
  }
});

const App = () => {
  return (
    <Provider
      id="component-App"
      store={store}
    >
      <ThemeProvider theme={theme}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

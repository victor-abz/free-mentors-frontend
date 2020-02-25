import React from 'react';
import './app.scss';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import jwtDecode from 'jwt-decode';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from './redux/store';
import { createBrowserHistory } from 'history';
import routes from './routes';

const store = configureStore();
const history = createBrowserHistory();

if(location.pathname === '/mentors'){
  if (!localStorage.token) {  
    window.location.href = '/login';
  }
}

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

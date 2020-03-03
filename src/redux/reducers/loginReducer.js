
const initialState = {
  credentials: {
    email: '',
    password: '',
  },
  isAuthenticated: false,
  user: {},
  token: '',
  error: {},
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_LOGIN_PENDING':
      return {
        ...state,
        credentials: {
          ...state.credentials,
        },
        error: {},
        loading: true,
      };
    case 'SESSION_LOGIN_FULFILLED':
      return {
        ...state,
        credentials: {
          ...state.credentials,
        },
        isAuthenticated: true,
        user: {},
        token: action.payload.data.data,
        loading: false,
      };
    case 'SESSION_LOGIN_REJECTED':
      return {
        ...state,
        credentials: {
          ...state.credentials,
        },
        isAuthenticated: false,
        user: {},
        error: action.payload.response.data,
        loading: false,
      };
    case 'SET_CURRENT_USER_PENDING':
      return {
        ...state,
        credentials: {
          ...state.credentials,
        },
        isAuthenticated: true,
        loading: true,
      };
    case 'SET_CURRENT_USER_FULFILLED':
      return {
        ...state,
        credentials: {
          ...state.credentials,
        },
        isAuthenticated: true,
        user: { ...action.payload.data.data },
      };
    default:
      return state;
  }
};

export default loginReducer;

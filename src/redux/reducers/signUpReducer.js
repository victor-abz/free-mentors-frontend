
const initialState = {
  user: {},
  token: '',
  error: {},
  loading: false,
  isAuthenticated: false
};
  
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_PENDING':
      return {
        ...state,
        error: {},
        loading: true,
      };
    case 'USER_SIGNUP_FULFILLED':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.data,
        loading: false,
      };
    case 'USER_SIGNUP_REJECTED':
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.payload.response.data,
        loading: false,
      };
      
    default:
      return state;
  }
};
  
export default signUpReducer;
  
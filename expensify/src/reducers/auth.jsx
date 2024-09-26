
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  
  export default(state = initialState, action) => {

    console.log(state)
    switch (action.type) {
   
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
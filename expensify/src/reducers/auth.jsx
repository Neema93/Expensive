
const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  export default(state = initialState, action) => {


    switch (action.type) {
   
      case 'LOGIN_SUCCESS':
        return {
          
          isAuthenticated: true,
          user: action.payload,
         
        };
      case 'LOGIN_FAILURE':
        return {
      
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
       
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
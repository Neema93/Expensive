const initialStateUser = {
    users: [],
  };
  
  export default(state = initialStateUser, action) => {
    switch (action.type) {
        case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
   
    default:
        return state;
    }
  };
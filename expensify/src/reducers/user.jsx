const initialStateUser = {
    users: [],
  };
  
 export const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
    }
  };
import { legacy_createStore as createStore, combineReducers ,applyMiddleware} from "redux";
import {v1 as uuid} from 'uuid';
import {thunk} from 'redux-thunk';



const addUser = ({userName = '', password = ''} = {}) =>({
    type: 'ADD_USER',
    user:{
      id:uuid(),
      userName ,
      password
    }
})
const removeUser =({id} = {}) => ({
    type: 'REMOVE_USER',
    id
})
const editUser = (id , update) =>({
    type: 'EDIT_USER',
    id,
    update

})
 
const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  export const logout = () => ({
    type: 'LOGOUT',
  });
  // Example of an asynchronous login action

const userReduserDefaultState =[];
const userReducer = (state =userReduserDefaultState , action) => {
    switch(action.type){ 
        case 'ADD_USER':
               return  [...state,action.user];
        case 'REMOVE_USER':
            return state.filter(({id}) => id !== action.id  )
        case 'EDIT_USER':
            return state.map((user)=>{
                if(user.id === action.id){
                    return{
                        ...user,
                        ...action.update
                    }
                }else {
                    return user;
                }
            })
        default:
            return state;
    }
};

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
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
  

  
// const getVisibleAuth = (user,isLogin, {userName = '' , password= ''}) =>{
//     return user.filter((user) => {

//         const userNameMatch = user.userName.toLowerCase().includes(userName.toLowerCase());
//         const passwordMatch = user.password.toLowerCase().includes(password.toLowerCase());
//         if(userNameMatch && passwordMatch) {
//             return isLogin = true; 
//         }else {
//             isLogin = false;
//         }
     
//     })
// }
const store = createStore(
    combineReducers({
        user:userReducer,
        auth:authReducer
       

    }),applyMiddleware(thunk)
);
store.subscribe(() => {
    const state = store.getState();
    // const VisibleUser = getVisibleAuth(state.user);
    console.log(state);
    // console.log(VisibleUser);
})


// const userOne = store.dispatch(addUser({userName:'Neema',password:'123'}))
// const userTwo= store.dispatch(addUser({userName:'heeya',password:'123'}))
// store.dispatch(removeUser({id: userOne.user.id }))
// store.dispatch(editUser(userTwo.user.id, {password: '567'}))

// const login = (credentials) => async (dispatch) => {
 
//     try {
//       // Replace with your login API call
//       const fakeLoginApi = 'http://localhost:9000/users';
//       const response = await fakeLoginApi(credentials);
//       dispatch(loginSuccess(response.user));
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//     }
//   };
const loginUser = (credentials) => {
    return async (dispatch) => {
    //    console.log(credentials)
        try {
            // const userName = "Neema";
            const response = await fetch(`http://localhost:9000/users/${credentials.userName}`);
                // , {
            //     method: 'GET',
            //     // headers: { 'Content-Type': 'application/json' },
            //     // body: JSON.response(credentials),
            // });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
           
            if (response.ok) {
                dispatch(loginSuccess(data.user));
            } else {
                dispatch(loginFailure(data.error));
            }
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};
  store.dispatch(loginUser({userName:"Neema"}));
const demoState = {
    user: [{
      userName : 'Meet',
      password :'123'
    }],
    auth:{
          userName : 'Meet',
      password :'123'
    }
};
export default demoState;
import { legacy_createStore as createStore, combineReducers ,applyMiddleware} from "redux";
import {v1 as uuid} from 'uuid';
import {thunk} from 'redux-thunk';
import axios from 'axios';
const API_URL = 'http://localhost:9000/users';



export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_USERS', payload: response.data });
  };
  
  export const addUser = (user) => async (dispatch) => {
    const response = await axios.post(API_URL, user);
    dispatch({ type: 'ADD_USER', payload: response.data });
  };
  
  export const updateUser = (user) => async (dispatch) => {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
  };
 
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

  const initialStateUser = {
    users: [],
  };
  
  const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, users: action.payload };
      case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload),
        };
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
const store = createStore(
    combineReducers({
        user:userReducer,
        auth:authReducer
       

    }),applyMiddleware(thunk)
);
store.subscribe(() => {
    const state = store.getState();
    // const VisibleUser = getVisibleAuth(state.user);
    console.log(state.auth);
    console.log(state.user)
    // console.log(VisibleUser);
})

// store.dispatch(fetchUsers())
// const userOne = store.dispatch(addUser({user_username:'Prisha',user_password:'123'}))
//const userTwo= store.dispatch(addUser({userName:'heeya',password:'123'}))
// store.dispatch(deleteUser({id: '1' }))
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
        try {
            const response = await axios.get(`http://localhost:9000/users/${credentials.userName}`);
            console.log(response.data)
            if (response.status !== 200) {
              
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.status === 200) {
                if(response.data.user_username === credentials.userName && response.data.user_password === credentials.password){
                    dispatch(loginSuccess(response.data));
                } else {
                     dispatch(loginFailure(response.data.error));
                }  
            } else {
                dispatch(loginFailure(response.data.error));
            }
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};
//   store.dispatch(loginUser({userName:"Prisha" , password: '123'}));
//   store.dispatch(logout())
  
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
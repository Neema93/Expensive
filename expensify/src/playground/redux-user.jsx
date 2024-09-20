import { legacy_createStore as createStore, combineReducers } from "redux";
import {v1 as uuid} from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

export const fetchUsers = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch(`https://localhost:9000/users`);
    return res?.json();
 });
 console.log(fetchUsers());
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
const loginsuccess = (userName ,password) => ({
    type: 'LOGINSUCCESS',
    userName,
    password
})

const loginFail = () =>({
    type: 'LOGINFAIL'

})

const logout = () =>({
    type: 'LOGOUT'
})

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
const loginRedusersDefaultState = {
      user:{}
};
const authRedusers =(state = loginRedusersDefaultState, action) =>
{
    switch(action.type){  
        case 'LOGINSUCCESS':
            return{
               user:action.user
            };
        case 'LOGINFAIL':
            return{
               user:{}
            };
        case 'LOGOUT':  
        return{
            user:{}
        }; 
       
        default:
            return state;
    }
}
// const getVisibleAuth = (user, {userName = '' , password= ''}) =>{
//     return user.filter((user) => {

//         const userNameMatch = user.userName.toLowerCase().includes(userName.toLowerCase());
//         const passwordMatch = user.password.toLowerCase().includes(password.toLowerCase());
//         return userNameMatch && passwordMatch; 
//     })
// }
const store = createStore(
    combineReducers({
        user:userReducer
    

    })
);
store.subscribe(() => {
    const state = store.getState();
    // const VisibleUser = getVisibleUser(state.user);
    console.log(state);
})
const userOne = store.dispatch(addUser({userName:'Neema',password:'123'}))
const userTwo= store.dispatch(addUser({userName:'heeya',password:'123'}))
store.dispatch(removeUser({id: userOne.user.id }))
store.dispatch(editUser(userTwo.user.id, {password: '567'}))
store.dispatch(loginsuccess('Neema','123'));
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
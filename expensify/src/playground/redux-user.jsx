import { legacy_createStore as createStore, combineReducers } from "redux";

const addUser = ({userName = '', password = ''} = {}) =>({
    type: 'ADD_USER',
    user:{
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
const filtersRedusers =(state = loginRedusersDefaultState, action) =>
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
const getVisibleUser = (user, {userName, password}) =>{
    return expenses.filter(() => {

        const userMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
const store = createStore(
    combineReducers({
        user:userReducer,

    })
);

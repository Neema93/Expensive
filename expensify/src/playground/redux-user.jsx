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
        userName:'',
        password: ''
};
const filtersRedusers =(state = loginRedusersDefaultState, action) =>
{
    switch(action.type){  
        case 'LOGINSUCCESS':
            return{
                ...state,
                text:action.text
            };
        case 'LOGINFAIL':
            return{
                ...state,
                sortBy: "amount"
            };
        case 'LOGOUT':  
        return{
            ...state,
            sortBy: "date"
        }; 
       
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        user:userReducer,

    })
);

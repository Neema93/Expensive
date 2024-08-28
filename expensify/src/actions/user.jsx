import {v1 as uuid} from 'uuid';
export const addUser = ({ username= '', password = ''} = {}) =>({
    type: 'ADD_USER',
    user:{
        id:uuid(),
        username,
        password
    }
})
export const removeUser =({id} = {}) => ({
    type: 'REMOVE_USER',
    id
})
export const editUser = (id , update) =>({
    type: 'EDIT_USER',
    id,
    update

})
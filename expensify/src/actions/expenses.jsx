import {v1 as uuid} from 'uuid';
import axios from 'axios';

const API_URL = 'http://localhost:9000/expenses/';

export const addExpense = ({description = '', amount = 0, user_id = ''} = {}) => async(dispatch) =>  {
    
    console.log(user_id,"user_id");
    const response = await axios.post(API_URL, {description:description, amount: amount,user_id:user_id});
    console.log("data send", response.status)
    dispatch({ type: 'ADD_EXPENSE', payload: response.data });
}

export const removeExpense =({id} = {}) => ({
    
    type: 'REMOVE_EXPENSE',
    id
})
export const editExpense = (id , update) =>({
    type: 'EDIT_EXPENSE',
    id,
    update

})

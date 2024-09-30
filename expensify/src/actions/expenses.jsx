
import axios from 'axios';

const API_URL = 'http://localhost:9000/expenses/';

export const getExpenses =()  => async(dispatch,getState)=>{
    const user_id = getState().auth.user.user_id;
    try {
        const response = await axios.get(`${API_URL}${user_id}`);
        dispatch({ type: 'GET_EXPENSES', payload: response.data });
    } catch (error) {
        console.error("Error fetching expenses:", error);
      
    }
}
export const addExpense = ({description = '', amount = 0, user_id = ''} = {}) => async(dispatch) =>  {
    try {
    const response = await axios.post(API_URL, {description:description, amount: amount,user_id:user_id});
    dispatch({ type: 'ADD_EXPENSE', payload: response.data });
} catch (error) {
    console.error("Error add expenses:", error);
  
}
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

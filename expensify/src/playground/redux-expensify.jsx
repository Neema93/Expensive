import { legacy_createStore as createStore, combineReducers } from "redux";
import {v1 as uuid} from 'uuid';
const addExpense = ({description = '', amount = 0, createdAt =  0} = {}) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        amount,
        createdAt
    }
})
const removeExpense =({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const editExpense = (id , update) =>({
    type: 'EDIT_EXPENSE',
    id,
    update

})
const expensesReduserDefaultState =[];
const expensesReducer = (state =expensesReduserDefaultState , action) => {
    switch(action.type){ 
        case 'ADD_EXPENSE':
               return  [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id  )
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.update
                    }
                }else {
                    return expense;
                }
            })
        default:
            return state;
    }
};
const filtersRedusersDefaultState = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate:undefined
};
const filtersRedusers =(state = filtersRedusersDefaultState, action) =>
{
    switch(action.type){         
        default:
            return state;
    }
}
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersRedusers
    })
);
store.subscribe(() => {
    console.log(store.getState());
})
const expenseOne = store.dispatch(addExpense({description:'rent',amount: 100}))
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount: 300}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
const demoState = {
    expenses: [{
        id:'rent',
        description: 'January Rent',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
};

export default demoState;
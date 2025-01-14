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
const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
})
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
    type:'SORT_BY_DATE'
}) 
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
})
const setEndDate =( endDate) =>({
    type:'SET_END_DATE',
    endDate
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
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: "amount"
            };
        case 'SORT_BY_DATE':  
        return{
            ...state,
            sortBy: "date"
        }; 
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
        return {
            ...state,
            endDate: action.endDate
        }  
        default:
            return state;
    }
}
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersRedusers
    })
);
store.subscribe(() => {
    const state = store.getState();
    const VisibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(VisibleExpense);
})
const expenseOne = store.dispatch(addExpense({description:'rent',amount: 100, createdAt:1000}))
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount: 300, createdAt: -1000}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate(0));
store.dispatch(setEndDate(125));
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
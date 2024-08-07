import { legacy_createStore as createStore, combineReducers } from "redux";
const addExpense = () =>({

})
const expensesReduserDefaultState =[];
const expensesReducer = (state =expensesReduserDefaultState , action) => {
    switch(action.type){         
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
console.log(store.getState);
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
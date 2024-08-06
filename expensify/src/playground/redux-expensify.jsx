import { legacy_createStore as createStore, combineReducers } from "redux";
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

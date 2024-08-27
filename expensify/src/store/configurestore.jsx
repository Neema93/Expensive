import { legacy_createStore as createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersRedusers from "../reducers/filters"
export default () => {
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersRedusers,
          
        })
    );
    return store;
}

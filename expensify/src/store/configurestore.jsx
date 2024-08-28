import { legacy_createStore as createStore, combineReducers,applyMiddleware} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersRedusers from "../reducers/filters"
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';
import {thunk} from 'redux-thunk';
export default () => {
    // const storeAuth = createStore(authReducer, applyMiddleware(thunk));
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersRedusers,
            auth:authReducer,
            user:userReducer
            
        })
    );
    return store;
}

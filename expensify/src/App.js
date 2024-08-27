import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import configurestore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import './style/style.scss'
// import store from './playground/redux-101';
// import person from './playground/destructuring';
//import demoState from './playground/redux-expensify';

function App(){

const storeAuth = createStore(authReducer, applyMiddleware(thunk));
  const store = configurestore();
  store.dispatch(addExpense({description:'water bill',amount: 4500,createdAt: '2000-02-08'}))
  store.dispatch(addExpense({description:'gas bill',createdAt: '2000-02-08'}))
  store.dispatch(addExpense({description:'rent bill',amount: 102500,createdAt: '2000-02-08'}))
  store.dispatch(setTextFilter())
  // setTimeout(() => {
  //   store.dispatch(setTextFilter('bill'))
  // },3000)
 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
 console.log(visibleExpenses);
  return (
    <div className="App">
      <Provider store={store}>
      <AppRouter />
      </Provider>
    
 </div>
    );
  }

export default App;

import React from 'react';

import './App.css';
import AppRouter from './routers/AppRouter';
import configurestore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import store from './playground/redux-101';
// import person from './playground/destructuring';
// import demoState from './playground/redux-expensify';

function App(){
  const store = configurestore();
  store.dispatch(addExpense({description:'water bill'}))
  store.dispatch(addExpense({description:'gas bill'}))
  store.dispatch(setTextFilter('gas'))

 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
 console.log(visibleExpenses);
  return (
    <div className="App">

      <AppRouter />
 </div>
    );
  }

export default App;

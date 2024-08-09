import React from 'react';
import {Provider} from 'react-redux';
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
  store.dispatch(addExpense({description:'water bill',amount: 4500}))
  store.dispatch(addExpense({description:'gas bill'}))
  store.dispatch(setTextFilter('gas'))
  setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
  },3000)
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

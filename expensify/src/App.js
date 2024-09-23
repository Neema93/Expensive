import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import configurestore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import getVisibleUser from './selectors/login'



import './style/style.scss'
// import { addUser } from './actions/user';
// import store from './playground/redux-101';
// import person from './playground/destructuring';
//import demoState from './playground/redux-expensify';
// import demoState from './playground/redux-user';

function App(){


  const store = configurestore();
  store.dispatch(addExpense({description:'water bill',amount: 4500,createdAt: '2000-02-08'}))
  store.dispatch(addExpense({description:'gas bill',createdAt: '2000-02-08'}))
  store.dispatch(addExpense({description:'rent bill',amount: 102500,createdAt: '2000-02-08'}))
  // store.dispatch(addUser({username:'Neema', password:'123'}))
  store.dispatch(setTextFilter())

 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
//  const visibleUser = getVisibleUser(state.user,state.auth)
 console.log(visibleExpenses);
 console.log(state.auth);
 console.log(state.user)
//  console.log(visibleUser)
  return (
    <div className="App">
      <Provider store={store}>
      <AppRouter />
      </Provider>
    
 </div>
    );
  }

export default App;

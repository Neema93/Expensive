import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import configurestore from './store/configurestore';
import getVisibleExpenses from './selectors/expenses';
import './style/style.scss'
function App(){
  const store = configurestore();
 const state = store.getState();
getVisibleExpenses(state.expenses,state.filters)
  return (
    <div className="App">
      <Provider store={store}>
         <AppRouter />
      </Provider>
    
 </div>
    );
  }

export default App;

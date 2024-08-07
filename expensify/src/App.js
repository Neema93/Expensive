
import './App.css';
import AppRouter from './routers/AppRouter';
import store from './playground/redux-101';
import person from './playground/destructuring';
import demoState from './playground/redux-expensify';
function App(){
  console.log(store.getState());
  console.log(person);
  console.log(demoState);
  return (
    <div className="App">

      <AppRouter />
 </div>
    );
  }

export default App;

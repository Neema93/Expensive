
import './App.css';
import AppRouter from './routers/AppRouter';
import store from './playground/redux-101';
function App(){
  console.log(store.getState());
  return (
    <div className="App">

      <AppRouter />
 </div>
    );
  }

export default App;


import './App.css';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
const ExpenseDashbordPage = () => (
  <div>
    This is Dashbord.
  </div>
);
const CreatePage = () => (
  <div>
    This is CreateExpensify.
  </div>
);
const EditPage = () => (
  <div>
    This is EditExpensify.
  </div>
);
const HelpPage = () => (
  <div>
    This is Help.
  </div>
);
const NotFound = () => (
  <div>
    404.
  </div>
);

function App() {

  return (
    <div className="App">
      <h1>Expensify</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={ExpenseDashbordPage} />
        <Route path="/create" Component={CreatePage} /> 
        <Route path="/edit" Component={EditPage} /> 
        <Route path="/help" Component={HelpPage} />
        <Route  path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

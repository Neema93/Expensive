import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashbordPage = () =>{
 
return(
    <div className="container">
      <h1>Expense List</h1>
      <ExpenseListFilters />
      <ConnectedExpenseList />
    </div>
  )};


  export default ExpenseDashbordPage;
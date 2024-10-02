import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';
import { useEffect } from "react";
import { getExpenses } from "../actions/expenses";
import { connect } from "react-redux";
const ExpenseDashbordPage = () =>{
  useEffect(() => {
    getExpenses();
  }, []);
return(
    <div className="container">
        <h1>Expense List</h1>
      <ExpenseListFilters />
      <ConnectedExpenseList />
    </div>
  )};
  const mapDispatchToProps = (dispatch) => ({
    getExpenses: () => dispatch(getExpenses()) // Create a prop for fetching expenses
});

  export default connect(undefined ,mapDispatchToProps)(ExpenseDashbordPage);
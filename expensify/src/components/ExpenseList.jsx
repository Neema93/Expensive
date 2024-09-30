import { connect } from "react-redux";

import ExpenseListItem  from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>

        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);
const mapStateToProps = (state) => {
    const flatExpenses = state.expenses[0] || [];
    return {
        
        expenses: selectExpenses(flatExpenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);

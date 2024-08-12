import { connect } from "react-redux";
import expenses from "../reducers/expenses";
import filters from "../reducers/filters";
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
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
import { connect } from "react-redux";
import expenses from "../reducers/expenses";
import filters from "../reducers/filters";
import ExpenseListItem  from "./ExpenseListItem";
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem {...expense}/>
        })}
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseList);

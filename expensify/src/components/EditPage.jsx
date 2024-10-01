import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense,getExpenses } from "../actions/expenses";
import { useNavigate } from 'react-router-dom';
const EditPage = (props) => {
  const navigate = useNavigate();
  const doStuff = event => navigate('/dashboard', { replace: true });
  let {id,description,amount,createdAt} = useParams();
  const newexpense = {
    id,
    description,
    amount,
    createdAt
  }
  useEffect(() => {
    getExpenses();

  }, [getExpenses]);
  console.log("edit",newexpense)
  return (
    <div>
     <ExpenseForm 
     expense={newexpense}
     onSubmit={(expense) => {
      props.dispatch(editExpense(newexpense.id,expense));
      props.dispatch(getExpenses());
      doStuff();
     }}
     />
          <button onClick={() => {
            props.dispatch(removeExpense({id: newexpense.id}));
            doStuff();
        }}>Remove</button>
    </div>
  );
}
const mapStateToProps = (state, id) => ({
  expense: state.expenses.find((expense) => expense.id === id)
});

  export default connect(mapStateToProps)(EditPage);
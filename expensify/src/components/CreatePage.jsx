import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
const CreatePage = (props) => {
  const navigate = useNavigate();
  const doStuff = event => navigate('/dashboard', { replace: true });
  return (
    <div>
      <Header />
      <h1>Create Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          doStuff();
          console.log(expense);
        }}
      />
    </div>
  )
};

export default connect()(CreatePage);
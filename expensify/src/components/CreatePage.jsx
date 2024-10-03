import React from "react";
import { connect, useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense, getExpenses } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const CreatePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doStuff = (event) => navigate("/dashboard");
  return (
    <div className="container">
      <h1>Create Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          dispatch(getExpenses());
          doStuff();
          console.log(expense);
        }}
      />
    </div>
  );
};

export default connect()(CreatePage);

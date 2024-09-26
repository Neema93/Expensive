import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';
import Header from "./Header";

const ExpenseDashbordPage = () => (
    <div>
      <Header />
      <ExpenseListFilters />
      <ConnectedExpenseList />
    </div>
  );
  export default ExpenseDashbordPage;
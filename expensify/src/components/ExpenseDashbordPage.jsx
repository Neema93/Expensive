import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashbordPage = () => (
    <div>
      <ExpenseListFilters />
      <ConnectedExpenseList />
    </div>
  );
  export default ExpenseDashbordPage;
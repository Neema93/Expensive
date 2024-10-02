
import { Link } from 'react-router-dom';
const ExpenseListItem =({ id, description, amount, createdat}) =>(
    <div className='list'>
        <Link className='link' to={`/edit/${id}/${description}/${amount}/${createdat}`}> 
        <span className='expense-name'>{description}</span>
        </Link>
        <span>{amount} - {createdat}</span>
        {/* <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button> */}
    </div>
);
export default  (ExpenseListItem);
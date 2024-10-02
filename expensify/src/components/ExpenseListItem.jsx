
import { Link } from 'react-router-dom';
const ExpenseListItem =({ id, description, amount, createdat}) =>(
    <div className='list'>
        <Link to={`/edit/${id}/${description}/${amount}/${createdat}`}> 
        <span>{description}</span>
        </Link>
        <span>{amount} - {createdat}</span>
        {/* <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button> */}
    </div>
);
export default  (ExpenseListItem);
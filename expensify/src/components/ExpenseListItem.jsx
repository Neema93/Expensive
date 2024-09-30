
import { Link } from 'react-router-dom';
const ExpenseListItem =({ id, description, amount, createdat}) =>(
    <div>
        <Link to={`/edit/${id}/${description}/${amount}/${createdat}`}> 
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdat}</p>
        {/* <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button> */}
    </div>
);
export default  (ExpenseListItem);
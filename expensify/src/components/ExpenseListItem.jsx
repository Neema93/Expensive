
import { Link } from 'react-router-dom';
const ExpenseListItem =({ id, description, amount, createdAt}) =>(
    <div>
        <Link to={`/edit/${id}/${description}/${amount}/${createdAt}`}> 
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        {/* <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button> */}
    </div>
);
export default  (ExpenseListItem);
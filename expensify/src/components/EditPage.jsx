import {useParams } from 'react-router-dom';
const EditPage = (props) => {
    let { id } = useParams(); 
    return (
        <div>
          This is EditExpensify with id of {id}.
        </div>
      );
}
  export default EditPage;
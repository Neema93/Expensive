const expensesReduserDefaultState =[];
// eslint-disable-next-line import/no-anonymous-default-export
export default(state =expensesReduserDefaultState , action) => {
    switch(action.type){ 
        case 'GET_EXPENSES':
            return  [...state,action.expense];
        case 'ADD_EXPENSE':
               return  [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id  )
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.update
                    }
                }else {
                    return expense;
                }
            })
        default:
            return state;
    }
};
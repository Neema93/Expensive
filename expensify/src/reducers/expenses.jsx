const expensesReduserDefaultState =[];

// eslint-disable-next-line import/no-anonymous-default-export
export default(state =expensesReduserDefaultState , action) => {
    switch(action.type){ 
        case 'GET_EXPENSES':
            return (
                [action.payload]
            )
        
        case 'ADD_EXPENSE':
               return  [...state,action.payload];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.payload.id  )
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.payload.id){
                    return{
                        ...expense,
                        ...action.payload.update
                    }
                }else {
                    return expense;
                }
            })
        default:
            return state;
    }
};
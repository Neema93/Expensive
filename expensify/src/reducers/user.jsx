const userReduserDefaultState =[];
export default(state = userReduserDefaultState , action) => {
    switch(action.type){ 
        case 'ADD_USER':
               return  [...state,action.user];
        case 'REMOVE_USER':
            return state.filter(({id}) => id !== action.id  )
        case 'EDIT_USER':
            return state.map((user)=>{
                if(user.id === action.id){
                    return{
                        ...user,
                        ...action.update
                    }
                }else {
                    return user;
                }
            })
        default:
            return state;
    }
};
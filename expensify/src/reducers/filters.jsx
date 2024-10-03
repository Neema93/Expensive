const filtersRedusersDefaultState = {
  text: "",
  sortBy: "date",
  
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = filtersRedusersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
   
    default:
      return state;
  }
};

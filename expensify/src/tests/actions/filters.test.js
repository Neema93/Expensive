import { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from "../../actions/filters";
test('should setup setText filter action object', () => {
    const action = setTextFilter({ Text: 'milk'});
   expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: {Text:'milk'}
   });
})
test('should setup Amount filter action object', () => {
    const action = sortByAmount();
   expect(action).toEqual({
   type: 'SORT_BY_AMOUNT'
   });
})
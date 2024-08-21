import { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from "../../actions/filters";
test('should setup setText filter action object', () => {
    const action = setTextFilter({ Text: 'milk'});
   expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: {Text:'milk'}
   });
})
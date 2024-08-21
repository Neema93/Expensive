import { addExpense,editExpense,removeExpense } from "../../actions/expenses";
import {v1 as uuid} from 'uuid';
test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
   expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
   });
})
test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {amount: 123});
   expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    update: {amount: 123}
   });
})
test('should setup add expense action object', () => {
    const action = addExpense({ description: 'milk'});
   expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
        id: expect.any(String),
        description: 'milk',
        amount: 0,
        createdAt: 0
    }
   });
})
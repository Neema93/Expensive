import selectExpenses from '../../selectors/expenses';
const expenses =[{
    id:'1',
    description: 'Milk',
    amount: 12,
    createdAt: 0

},
{
    id:'2',
    description: 'water',
    amount: 120,
    createdAt: 0

},
{
    id:'3',
    description: 'waterpark',
    amount: 10,
    createdAt: 0

}]
test('should filter by text value',() => {
    const filters ={
        text:'w',
        sortBy: 'amount'
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2]]);
    
})
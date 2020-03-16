import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    })
})
test("setup for edit expense action object", () => {
    const action = editExpense('xxx', { note: 'new value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'xxx',
        updates : {note: 'new value'}
    })
})
//testing add expense, 2 test needed 

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This is a note'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
    
        }
    })
});
test('Should setup add expense action object with default values', () => {
    const expenseData = {
        description : '',
        note : '', 
        amount : 0,
        createdAt : 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
    expense: {
        id: expect.any(String),
        ...expenseData
    }
    })
});
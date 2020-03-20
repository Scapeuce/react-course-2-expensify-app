import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import expenses from '../fixtures/expenses'
const createMockStore = configureMockStore([thunk])


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

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});
test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This is cool',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData

            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        
    })
})
test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults

            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        
    })
})
// test('Should setup add expense action object with default values', () => {
//     const expenseData = {
//         description : '',
//         note : '', 
//         amount : 0,
//         createdAt : 0
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//     expense: {
//         id: expect.any(String),
//         ...expenseData
//     }
//     })
// });
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'
import { unstable_batchedUpdates } from 'react-dom';
test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
});
test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test('Should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses]);
});
test('Should add an expense', () => {
    const expense =  {id: '5',
    description: 'Lunch',
     note: '',
    amount: 900,
    createdAt:moment(0).subtract(4,'days').valueOf()
}
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense]);
});
test('Should edit an expense', () => {
    
    const note = 'Nota grossa'
   
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            note
        } 
    }

    const state = expensesReducer(expenses, action)
    expect(state[2].note).toBe(note);
});
test('Should not edit an expense with id of not found', () => {
    
    const note = 'Nota grossa'
   
    const action = {
        type: 'EDIT_EXPENSE',
        id: 99,
        updates: {
            note
        } 
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});


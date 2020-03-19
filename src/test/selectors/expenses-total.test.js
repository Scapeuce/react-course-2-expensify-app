import React from 'react'
import { shallow } from 'enzyme'

import  getExpensesTotal  from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

const expenses1 = [{ amount: 0 }, { amount: 0 }]
const expenses2 = []
const expenses3 = [{amount: 444}]


test('Should return total amount of several expenses', () => {
    const wrapper = getExpensesTotal(expenses)
    expect(wrapper).toBe(114195);
});
test('Should return total amount of one expense', () => {
    const wrapper = getExpensesTotal([expenses[0]])
    expect(wrapper).toBe(195);
});
test('Should return 0 amount if no expenses  ', () => {
    const wrapper = getExpensesTotal(expenses2)
    expect(wrapper).toBe(0);
});
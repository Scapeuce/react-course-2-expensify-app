import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary}  from '../../components/ExpensesSummary'
// import expensesTotal from '../../selectors/expenses-total';
test('shoud correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
test('shoud correctly render ExpensesSummary with  more than 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={236677542319} />);
    expect(wrapper).toMatchSnapshot();
});
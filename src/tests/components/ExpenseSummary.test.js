import React from 'react';
import { shallow } from 'enzyme';

import selectExpensesTotal from '../../selectors/expenses-total';
import { ExpenseSummary } from '../../components/ExpenseSummary'; // named export, pass props
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={expenses.length} expensesTotal={selectExpensesTotal(expenses)}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with no data passed in', () => {
  const wrapper = shallow(<ExpenseSummary />);
  expect(wrapper).toMatchSnapshot();
});
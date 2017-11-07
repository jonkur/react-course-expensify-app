import React from 'react';
import { shallow } from 'enzyme';

import selectExpensesTotal from '../../selectors/expenses-total';
import { ExpenseSummary } from '../../components/ExpenseSummary'; // named export, pass props
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={343} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={5712}/>);
  expect(wrapper).toMatchSnapshot();
});
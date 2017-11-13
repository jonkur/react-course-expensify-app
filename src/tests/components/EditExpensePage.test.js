import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense, history;
beforeEach(() => {
  history = { push: jest.fn() };
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[1]} 
      history={history} 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1]);
  expect(history.push).toHaveBeenCalled();
});
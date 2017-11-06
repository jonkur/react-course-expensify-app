import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
  <div>
    {props.expenseCount !== 1 ? 
      <p>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p> : 
      <p>Viewing {props.expenseCount} expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>}
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length, 
    expensesTotal: selectExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
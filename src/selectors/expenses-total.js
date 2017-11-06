export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((total, currentAmount) => total + currentAmount, 0);
};
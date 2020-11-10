const layout = require('./layout');

function createExpenseElements(listOfExpenses) {
	if (!listOfExpenses) {
		return `<p>Create an expense....</p>`;
	}

	let expenseList = [];
	listOfExpenses.forEach((e) => {
		expenseList.push(`
    <li>${e.name}  <span>${e.amount}</span>  <span>${e.date}</span>  <button>Delete</button></li>
    `);
	});
	return expenseList;
}

module.exports = ({ expenses }) => {
	return layout({
		content : `
      <div id="form-container">
        <h3 class="form-heading">Add New Expense</h3>
        <form action="" method="post">
          <input type="text" class="expense-name" name="name">
          <input type="text" class="expense-amount" name="amount">
          <input type="text" class="expense-date" name="date">
          <button type="submit">Add Expense</button>
        </form>
      </div>
      <div class="expense-list-area">
        <ul class="expense-list">
          ${createExpenseElements(expenses)}
        </ul>
      </div>
    `
	});
};

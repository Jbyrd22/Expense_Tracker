const layout = require('./layout');

module.exports = ({ expenses }) => {
	const expenseList = expenses
		.map((e) => {
			return `
        <tr>
          <td data-label="Name">${e.name}</td>
          <td data-label="Amount">${e.amount}</td>
          <td data-label="Date">${e.date}</td>
          <td data-label="Action">
            <form action="/delete/${e.id}" method="GET">
              <button class="ui inverted red button">Delete</button>
            </form>
          </td>
        </tr>`;
		})
		.join('\n');

	const getExpenseTotal = (expenseAmounts) => {
		let expenseCounter = 0;
		for (let i = 0; i < expenseAmounts.length; i++) {
			expenseCounter = expenseCounter + parseFloat(expenseAmounts[i].amount);
		}
		return expenseCounter.toString();
	};

	return layout({
		content : `
      <form action='/' method="POST">
        <div class="ui form">
          <div class="fields">
            <div class="field">
              <label>Expense Name</label>
              <input name="name" type="text" placeholder="Expense">
            </div>
            <div class="field">
              <label>Amount</label>
              <input name="amount" type="text" placeholder="Amount">
            </div>
            <div class="field">
              <label>Date</label>
              <input name="date" type="text" placeholder="Date">
            </div>
            <div class="field">
              <label>Submit Expense</label>
              <button class="ui inverted green button">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${expenses.length <= 0 ? 'There are no Expenses to show' : expenseList}
        </tbody>
      </table>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Total">${expenses.length <= 0 ? '' : getExpenseTotal(expenses)}</td>            
          </tr>
        </tbody>
      </table>
    `
	});
};

const express = require('express');
const bodyParser = require('body-parser');

const repo = require('./repositories/expenseRepo');
const newExpenseTemplate = require('./views/new');

const app = express();
const expenseRepo = new repo('expenses.json');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	const data = await expenseRepo.getAll();
	res.send(newExpenseTemplate({ expenses: data }));
});

app.post('/', async (req, res) => {
	const attrs = req.body;
	await expenseRepo.create(attrs);
	res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
	console.log(req.params);
	await expenseRepo.delete(req.params.id);
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('Expense Tracker is Running');
});

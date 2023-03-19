const form = document.querySelector('form');
const expenseList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#total-expenses');
let expenses = [];

function addExpense(e) {
  e.preventDefault();
  const name = document.querySelector('#expense-name').value;
  const amount = document.querySelector('#expense-amount').value;
  const cat = document.querySelector('#Category').value;
  if (name.trim() === '' || amount.trim() === '') {
    alert('Please enter a valid expense name and amount.');
    return;
  }
  const expense = {
    id: new Date().getTime(),
    name,
    amount: parseFloat(amount)
  };
  expenses.push(expense);
  updateExpenses();
  form.reset();
}

function updateExpenses() {
  expenseList.innerHTML = '';
  let total = 0;
  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.innerHTML = `${expense.name} <span>$${expense.amount.toFixed(2)}</span>`;
    expenseList.appendChild(li);
    total += expense.amount;
  });
  totalExpenses.innerHTML = `Total Expenses: $${total.toFixed(2)}`;
}

form.addEventListener('submit', addExpense);
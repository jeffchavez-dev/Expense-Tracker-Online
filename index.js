const Expense = require('./models/Expense');

function addExpense() {
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = formatDate(dateInput);
  
    if (!category || !description || !amount) {
      alert('Please fill in all fields.');
      return;
    }
  
    const expense = { date, category, description, amount };
    fetch('/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
  }


  function loadExpenses() {
    fetch('/expenses')
      .then(response => response.json())
      .then(expenses => {
        // Update your UI with the retrieved expenses
        const expensesTable = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
        expensesTable.innerHTML = '';
        expenses.forEach((expense, index) => {
          const row = expensesTable.insertRow();
          // ...
        });
      })
      .catch(error => console.error(error));
  }
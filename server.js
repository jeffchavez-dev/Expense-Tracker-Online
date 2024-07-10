const express = require('express');
const app = express();

app.use(express.json()); // parse JSON requests

// Create a route to handle expense creation
app.post('/expenses', (req, res) => {
  const { date, category, description, amount } = req.body;
  // Save the expense to your database (e.g., MongoDB, PostgreSQL)
  // For now, let's just log the expense to the console
  console.log(`Received expense: ${date}, ${category}, ${description}, ${amount}`);
  res.send({ message: 'Expense created successfully' });
});

// Create a route to handle expense retrieval
app.get('/expenses', (req, res) => {
  // Retrieve expenses from your database
  // For now, let's just return a sample response
  const expenses = [
    { date: '2023-02-15', category: 'Food', description: 'Lunch', amount: 10.99 },
    { date: '2023-02-16', category: 'Transportation', description: 'Gas', amount: 20.00 },
  ];
  res.json(expenses);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
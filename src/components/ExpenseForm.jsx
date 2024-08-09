// src/components/ExpenseForm.js

import React, { useState } from 'react';
import '../styles/ExpenseForm.css'; // Import your CSS file for ExpenseForm styling

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input (you can add more validation logic here)
    if (title.trim() === '' || isNaN(parseFloat(amount))) {
      alert('Please enter a valid title and amount.');
      return;
    }

    // Create an expense object
    const newExpense = {
      id: Date.now(), // Unique ID (you can use a library like uuid for more robust IDs)
      title,
      amount: parseFloat(amount),
    };

    // Save the expense to local storage
    const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = [...existingExpenses, newExpense];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

    // Clear the form
    setTitle('');
    setAmount('');

    // Notify the parent component (App.js) about the new expense
    addExpense(newExpense);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

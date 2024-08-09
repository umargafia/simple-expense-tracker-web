// src/components/ExpenseList.js

import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseListItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

// src/components/ExpenseListItem.js

import React from 'react';

function ExpenseListItem({ expense }) {
  return (
    <li className="expense-item">
      <span className="expense-title">{expense.title}</span>
      <span className="expense-amount">${expense.amount.toFixed(2)}</span>
    </li>
  );
}

export default ExpenseListItem;

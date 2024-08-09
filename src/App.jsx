import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseItem';

function App() {
  // State to manage expenses
  const [expenses, setExpenses] = useState([]);

  // Load expenses from local storage on initial render
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses.reverse());
  }, []);

  // Function to add an expense
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // Save the updated expenses to local storage
    localStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <ExpenseForm addExpense={addExpenseHandler} />
        <ExpenseList expenses={expenses} />
      </main>
      <footer>{/* Your footer component goes here */}</footer>
    </div>
  );
}

export default App;

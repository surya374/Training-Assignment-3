import React, { useState } from "react";
import Heading from "./components/heading";
import TotalIncome from "./components/Balance";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0);

  const addIncome = (amount) => {
    setIncome(income + amount);
  };

  const totalExpenses = () => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };

  const balanceLeft = () => {
    return income - totalExpenses();
  };

  const addExpenses = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div className="container">
      <Heading />
      <div className="balance-info">
        <p className="income">
          INCOME: <span className="inc">₹{income.toFixed(2)}</span>
        </p>
        <p className="expended">
          EXPENDED: <span className="exp">₹{totalExpenses().toFixed(2)}</span>
        </p>
        <p className="balance">
          BALANCE: <span className="bal">₹{balanceLeft().toFixed(2)}</span>
        </p>
      </div>
      <TotalIncome onSubmit={addIncome} />

      <AddTransaction
        onSubmit={addExpenses}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./app.css";

const AddTransaction = ({ expenses, onSubmit, setExpenses }) => {
  const [amount, setAmount] = useState();
  const [expendedList, setExpendedList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = {
      amount: parseFloat(amount),
      expendedList,
    };

    onSubmit(expenses);
    setExpendedList("");
    setAmount("");
  };

  return (
    <>
      <div className="transactionForm">
        <div>
          <h2 className="heading-add">ADD TRANSACTION</h2>
        </div>

        <div className="transaction-input">
          <div>
            <h4>EXPENSED ON</h4>
            <input
              type="text"
              className="expensedOn"
              placeholder="Item..."
              onChange={(e) => setExpendedList(e.target.value)}
              value={expendedList}
              id="expendedList"
              name="expendedList"
            />
          </div>

          <div>
            <h4>AMOUNT</h4>
            <input
              type="number"
              className="amount"
              placeholder="Amount.."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
              name="amount"
            />
          </div>

          <button className="button-submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </div>
      <div className="list-table">
        <h3>EXPENSES</h3>

        {expenses.map((expense) => (
          <ul key={expense} className="list">
            <li className="minus">
              {expense.expendedList}
              <span>{expense.amount.toFixed(2)}</span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default AddTransaction;

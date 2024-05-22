import React, { useState } from "react";
import "./app.css";

const TotalIncome = ({ onSubmit }) => {
  const [totalIncome, setTotalIncome] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseFloat(totalIncome));
    setTotalIncome("");
  };

  return (
    <form onSubmit={handleSubmit} className="balanceForm">
      <div>
        <div>
          <h2 htmlFor="income">INCOME</h2>
        </div>
        <div className="balance-input">
          <input
            type="number"
            className="income-input"
            placeholder="+₹0.00"
            value={totalIncome}
            id="income"
            name="income"
            onChange={(e) => setTotalIncome(e.target.value)}
          />
          <button className="incomeButton" type="submit">
            ADD INCOME
          </button>
        </div>
      </div>
    </form>
  );
};

export default TotalIncome;

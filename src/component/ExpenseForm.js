import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ submitForm }) => {
  const [visible, isVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onClick = () => {
    isVisible(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitForm({ title, amount, date });
    onReset();
  };

  const onReset = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="expenseForm">
      {!visible && <button onClick={onClick}>Add New Expense</button>}
      {visible && (
        <form onSubmit={onSubmit} onReset={onReset}>
          <div className="expenseForm__input">
            <div className="expenseForm__title">
              <label htmlFor="expense-title">Title</label>
              <input
                id="expense-title"
                onChange={(event) => setTitle(event?.target.value)}
                type="text"
                value={title}
              />
            </div>
            <div className="expenseForm__amount">
              <label htmlFor="expense-amount">Amount</label>
              <input
                id="expense-amount"
                onChange={(event) => setAmount(event?.target.value)}
                type="number"
                value={amount}
              />
            </div>
          </div>
          <div className="expenseForm__date">
            <label htmlFor="expense-date">Date</label>
            <input
              id="expense-date"
              onChange={(event) => setDate(event?.target.value)}
              type="date"
              min="2019-01-01"
              max="2021-09-30"
              value={date}
            />
          </div>
          <div className="expenseForm__buttons">
            <input type="reset" value="Cancel" />
            <div className="expenseForm__addBtn">
              <input type="submit" value="Add Expense" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;

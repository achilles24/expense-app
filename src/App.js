import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import ExpenseFilter from "./component/ExpenseFilter";
import "./styles.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");

  const formSubmit = (data) => {
    let formData = {
      title: data.title,
      amount: data.amount,
      date: !data.date ? new Date() : data.date
    };
    setExpenses((prevState) => {
      return [...prevState, formData];
    });
  };

  const filterByYear = (event) => {
    event.preventDefault();
    setFilter(event?.target.value);
  };

  return (
    <div className="App">
      <ExpenseForm submitForm={formSubmit} />
      <ExpenseFilter selected={filterByYear} />
      <ExpenseList items={expenses} filterKey={filter} />
    </div>
  );
}

import ExpenseItem from "./ExpenseItem";
import DateModel from "../model/DateModel";
import "./ExpenseList.css";

const ExpenseList = ({ items, filterKey }) => {
  const expenses = !filterKey
    ? items
    : items.filter(
        (item) => new DateModel(item.date)?.getyear() === +filterKey
      );

  return (
    <div className="expenseList">
      {expenses &&
        expenses.map((item, index) => <ExpenseItem key={index} item={item} />)}
      {expenses?.length === 0 && <h3>No Expense found</h3>}
    </div>
  );
};

export default ExpenseList;

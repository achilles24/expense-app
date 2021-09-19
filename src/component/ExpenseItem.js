import DateModel from "../model/DateModel";
import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  const date = new DateModel(item.date);
  const moment = {
    date: date?.getDate(),
    month: date?.getFullMonth(),
    year: date?.getyear()
  };

  return (
    <div className="expenseItem">
      <div className="expenseItem__date">
        <div className="expenseItem__dateContent">
          <h5 style={{ fontSize: 12 }}>{moment.month}</h5>
          <h6>{moment.year}</h6>
          <h3>{moment.date}</h3>
        </div>
      </div>
      <div className="expenseItem__title">
        <h3>{item.title}</h3>
      </div>
      <div className="expenseItem__amount">
        <div className="expenseItem__amountContent">
          <p>{item.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;

import "./ExpenseFilter.css";

const ExpenseFilter = ({ selected }) => {
  return (
    <div className="expenseFilter">
      <h5>Filter by year</h5>
      <select id="filter-year" onChange={selected}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;

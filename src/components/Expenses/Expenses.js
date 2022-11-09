import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterChangeHandler = (expenseFiltered) => {
    setFilteredYear(expenseFiltered);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesFilter
        onExpenseFilterChange={expenseFilterChangeHandler}
        selected={filteredYear}
      />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;

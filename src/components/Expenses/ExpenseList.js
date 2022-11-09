import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  let filteredContent = <p>No expense found.</p>;

  if (props.items.length > 0) {
    filteredContent = props.items.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return <Card className="expenses">{filteredContent}</Card>;
};

export default ExpenseList;

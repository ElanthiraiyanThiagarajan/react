import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickable() {
    setTitle("Updated");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickable}>click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

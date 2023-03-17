import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");

    console.log(title);
  };
  const changeHandler = () => {
    setAmount(100);
    console.log(" updated expense");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} loaction={props.loaction} title={title} />
      <button onClick={clickHandler}>Change title</button>
      <button onClick={changeHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;

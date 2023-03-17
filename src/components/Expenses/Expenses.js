import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import React from "react";
const Expenses=(props)=>{
 return (
   <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        loaction={props.items[0].loaction}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        loaction={props.items[1].loaction}
      />
       <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        loaction={props.items[2].loaction}
      />
       <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        loaction={props.items[3].loaction}
      />
    </Card>
  );
  }

  export default Expenses;

  